using Domain.Models;
using Domain.Models.Common;
using HamburguesitoNet.Application.Common.Interfaces;
using HamburguesitoNet.Application.Common.Interfaces.Services;
using Infrastructure.Persistence.Seeders;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using System.Reflection;
using System.Reflection.Emit;
using System.Threading;
using System.Threading.Tasks;

namespace HamburguesitoNet.Infrastructure.Persistence
{
    public class ApplicationDbContext : DbContext, IApplicationDbContext
    {

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        private readonly IDateTime _dateTime;
        private readonly IUserService _userService;

        public ApplicationDbContext(DbContextOptions options,
            IDateTime dateTime,
            IUserService userService) : base(options)
        {
            _dateTime = dateTime;
            _userService = userService;
        }
        public DbSet<Product> Products { get; set; }
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            foreach (var entry in ChangeTracker.Entries<Audit>())
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.Entity.CreatedBy = _userService.GetUser();
                        entry.Entity.Created = _dateTime.Now;
                        break;
                    case EntityState.Modified:
                        entry.Entity.UpdatedBy = _userService.GetUser();
                        entry.Entity.Updated = _dateTime.Now;
                        break;
                }
            }
            return base.SaveChangesAsync(cancellationToken);
        }

        public Task ReloadEntityAsync<TEntity>(TEntity entity) where TEntity : class
        {
            return Entry(entity).ReloadAsync();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Product>().Property(p => p.Price).HasColumnType("decimal(18, 2)");
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            ProductSeeder.Seed(builder);

            base.OnModelCreating(builder);
        }
    }
}

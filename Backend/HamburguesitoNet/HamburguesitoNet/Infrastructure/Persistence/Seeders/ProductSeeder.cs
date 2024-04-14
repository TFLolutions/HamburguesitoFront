using Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Seeders
{
    public static class ProductSeeder
    {
        public static void Seed(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product
                {
                    Id = 1,
                    Name = "Classic Burger",
                    Description = "A classic burger with cheese and lettuce",
                    Price = 5.99m,
                    Active = true
                },
                new Product
                {
                    Id = 2,
                    Name = "Veggie Burger",
                    Description = "A delicious and healthy veggie burger",
                    Price = 6.99m,
                    Active = true
                },
                new Product
                {
                    Id = 3,
                    Name = "Grilled Chicken Burger",
                    Description = "Juicy grilled chicken burger with herbs",
                    Price = 7.50m,
                    Active = true
                }
            );
        }
    }

}

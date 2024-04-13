using Application.Services;
using Domain.Models;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace Application.Command.Menu.GetProducts
{
    public class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, Product>
    {
        private readonly ProductService _productService;

        public CreateProductCommandHandler(ProductService productService)
        {
            _productService = productService;
        }

        public async Task<Product> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var producto = new Product
            {
                Name = request.Name,
                Description = request.Description,
                Price = request.Price,
                Active = true
            };
            return await _productService.Add(producto, cancellationToken);
        }
    }
}

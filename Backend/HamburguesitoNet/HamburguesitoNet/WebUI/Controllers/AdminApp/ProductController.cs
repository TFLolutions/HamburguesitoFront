using Application.Common.Exceptions;
using Application.Command;
using HamburguesitoNet.WebUI.Controllers;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Threading.Tasks;
using Application.Command.ProductCommand.AdminActionsProduct.AdminActionCreateProduct;

namespace WebUI.Controllers.AdminApp
{
    [Route("api/AdminApp")]
    [ApiController]
    public class ProductController : ApiController
    {
        public ProductController()
        {

        }

        [HttpGet]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.Conflict)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        [Route("/CreateProduct")]
        public async Task<IActionResult> GetProducts()
        {
            try
            {
                return Ok(await Mediator.Send(new AdminActionCreateProductCommand()));
            }

            // TODO : Personalizar excepcion 

            catch (GetProductsException ex) 
            {
                string message = "Could not get integrations.Failure: " + ex.ToString();
                return BadRequest(message);
            }
        }
    }
}

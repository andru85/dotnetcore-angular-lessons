using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using angular_lessons.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace angular_lessons.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : ControllerBase
    {
        ApplicationContext db;
        public ProductController(ApplicationContext context)
        {
            db = context;
            if (!db.Products.Any())
            {
                db.Products.Add(new Product {Name = "IPhone", Company = "Apple", Price = 100000});
                db.Products.Add(new Product {Name = "Nexus", Company = "Samsung", Price = 120000});
                db.Products.Add(new Product {Name = "Pixel", Company = "Google", Price = 150000});
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return db.Products.ToList();
        }

        [HttpGet("{id}")]
        public Product Detail(int id)
        {
            Product product = db.Products.FirstOrDefault(p => p.Id == id);
            return product;
        }

        [HttpPost]
        public IActionResult Post(Product product)
        {
            if (ModelState.IsValid)
            {
                db.Products.Add(product);
                db.SaveChanges();
                return Ok(product);
            }

            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Product product)
        {
            if (ModelState.IsValid)
            {
                db.Update(product);
                db.SaveChanges();
                return Ok(product);
            }

            return BadRequest(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Product product = db.Products.FirstOrDefault(p => p.Id == id);
            if (product != null)
            {
                db.Products.Remove(product);
                db.SaveChanges();
                return Ok(product);
            }
            return BadRequest("Product not found");
        }
        
    }
}
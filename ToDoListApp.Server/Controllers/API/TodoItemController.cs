using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoListApp.Server.DbContext;
using ToDoListApp.Server.Entities;
using ToDoListApp.Server.Entities.Database;

namespace ToDoListApp.Server.Controllers.API
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class TodoItemController : ControllerBase
    {
        private IRepository<ToDoItem> _repositoryToDoItem;

        public TodoItemController(IRepository<ToDoItem> repositoryToDoItem)
        {
            _repositoryToDoItem = repositoryToDoItem;
        }

        // READ
        [HttpGet]
        public IActionResult GetAllToDoItems()
        {
            try
            {

                DataOperationResult<List<ToDoItem>> toDoItemsOpResult = _repositoryToDoItem.GetAll();
                var response = new
                {
                    success = toDoItemsOpResult.Success,
                    message = toDoItemsOpResult.Message,
                    data = toDoItemsOpResult.Data

                };
                return Ok(response);

            }
            catch (Exception ex)
            {
                var response = new
                {
                    success = false,
                    message = ex.Message
                };
                return StatusCode(StatusCodes.Status500InternalServerError, response);
            }
        }

        //UPDATE
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] ToDoItem modifiedItem)
        {
            // Validate the modified item
            if (modifiedItem == null)
            {
                return BadRequest(new { success = false, message = "Modified item is null." });
            }

            try
            {
                var result = _repositoryToDoItem.ModifyEntity(id, modifiedItem);

                // Structuring the response
                var response = new
                {
                    item = result.Data,
                    success = result.Success,
                    message = result.Message
                };            
               return Ok(response);
            }
            catch (Exception ex)
            {
                var response = new
                {
                    success = false,
                    message = ex.Message
                };
                return StatusCode(StatusCodes.Status500InternalServerError, response);
            }
        }

        // CREATE
        // POST api/<ToDoItemController> -->  add a new item to the db    
        [HttpPost]
        public IActionResult Post([FromBody] ToDoItem newItem)
        {
            // Validate the incoming item
            if (newItem == null)
            {
                return BadRequest(new { success = false, message = "New item is null." });
            }
            try
            {

                // Call the repository to add the new item
                var result = _repositoryToDoItem.AddEntity(newItem);

                // Structuring the response
                var response = new
                {
                    success = result.Success,
                    message = result.Message,
                    item = result.Data,
                };

            
                return Ok(response);
            
            }
            catch (Exception ex)
            {
                var response = new
                {
                    success = false,
                    message = ex.Message
                };
                return StatusCode(StatusCodes.Status500InternalServerError, response);
            }

        }


        // DELETE api/<ToDoItemController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {

            try
            {
                // Call the repository to delete the item
                var result = _repositoryToDoItem.DeleteEntity(id);

                // Structuring the response
                var response = new
                {
                    success = result.Success,
                    message = result.Message
                };

            
                return Ok(response);

            }
            catch (Exception ex)
            {
                var response = new
                {
                    success = false,
                    message = ex.Message
                };
                return StatusCode(StatusCodes.Status500InternalServerError, response);
            }


        }



    }
}

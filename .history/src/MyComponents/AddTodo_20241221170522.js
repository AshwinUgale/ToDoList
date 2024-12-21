import React from 'react'

export const AddTodo = () => {
  return (
    <div className='container my-3'>
        <h3>Add a todo</h3>
        <form>
    <div class="mb-3">
      <label for="title" class="form-label">Todo Title</label>
      <input type="text" class="form-control" id="title" aria-describedby="emailHelp"/>
     
    </div>
    <div class="mb-3">
      <label for="desc" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-sm btn-success">Submit</button>
  </form>
  </div>
  )
}

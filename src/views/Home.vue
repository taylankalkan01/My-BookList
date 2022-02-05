<template>
  <div class="card p-2">
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'AddBook' })">+ Add Book</button>
    </div> 
     <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Language</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="books in bookList" :key="books.id">
          <td>{{books.id}}</td>
          <td>{{books.title}}</td>
          <td>{{books.author}}</td>
          <td>{{books.language}}</td>
           <td>
            <button @click="deleteBook(books)" class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookList: []
    };
  },
  created() {
    this.$appAxios.get("/books").then(book_list_response =>{
      this.bookList = book_list_response.data || [];
    });
  
  },
  methods: {
    deleteBook(books){
      this.$appAxios.delete(`/books/${books.id}`).then(delete_response =>{
        console.log(delete_response)
        if(delete_response.status ==200){
          this.bookList = this.bookList.filter(b => b.id !== books.id);
        }
      })
    }
  
  }
};
</script>

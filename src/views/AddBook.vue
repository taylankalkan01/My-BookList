<template>
  <div class="form-area card border p-2">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input type="text" v-model="userData.title" class="form-control" id="title" placeholder="Book Title?" />
    </div>

    <div class="mb-3">
      <label for="author" class="form-label">Author</label>
      <input type="text" v-model="userData.author" class="form-control" id="author" placeholder="Author?" />
    </div>
    
    <div class="mb-3">
      <label for="language" class="form-label">Language</label>
      <input type="text" v-model="userData.language" class="form-control" id="language" placeholder="Language?" />
    </div>

    <div class="d-flex justify-content-end align-items-center">
      <button class="btn btn-sm btn-secondary me-1" @click="$router.push({ name: 'Home' })" >Cancel</button>
      <button class="btn btn-sm btn-primary" @click= "onSave" >Save</button>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: {
        title: null,
        author: null,
        language: null
      }
    };
  },
  methods:{
      onSave(){
          console.log(this.userData);
          this.$appAxios.post("/books", this.userData).then(save_response => {
              console.log("save_response", save_response)
              this.resetData();
              this.$router.push("/");
          })
      },
      resetData(){
          Object.keys(this.userData).forEach(key => (this.userData[key] = null));
      }
  }
  
};
</script>
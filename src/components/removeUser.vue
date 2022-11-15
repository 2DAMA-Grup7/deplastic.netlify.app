<template >
     <v-form 
     ref="delete form"
     v-model="valid"
     lazy-validation>
       <v-text-field
       v-model="DeleteUser"
       :counter="10"
       :rules="idRules"
       label="Delete User"
       required></v-text-field>
        
       <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="deleteuserbtn"
    >
      Delete
    </v-btn>
     </v-form>
    
    
    </template>
    <script>
    export default {
        data: () => ({
       valid: true,
       DeleteUser: '',
       idRules:[
       v => !!v || 'ID is required',
      //somehow add just numbers rule someday V => /5/.test(v) || 'ID must be a number'

       ]

        }),
        methods: {
       deleteUser () {
         this.$refs.form. delete("/.netlify/functions/api/users:id", {
        method: "DELETE",
        body: JSON.stringify({ id:this.id}),
        headers: { "Content-Type": "application/json" },
      })
     ,
      validate () 
      {
        const { valid } = this.$refs.form.validate()

        if (valid) alert('Form is valid')
      }},
      reset () {
        this.$refs.form.reset()
      }
    }
  }
    </script>
<template >
<div class="py-4">
 

 <v-card
   class="mx-auto pa-12 pb-8"
   elevation="8"
   max-width="448"
   rounded="lg"
 >

   <div class="text-subtitle-1 text-medium-emphasis">User</div>

   <v-text-field
     density="compact"
     placeholder="Username"
     prepend-inner-icon="mdi-account"
     
     variant="outlined"
   ></v-text-field>

   <div class="text-subtitle-1 text-medium-emphasis">Email</div>

   <v-text-field
     density="compact"
     placeholder="Email address"
     prepend-inner-icon="mdi-email"
     variant="outlined"
   ></v-text-field>

   <div class="text-subtitle-1 text-medium-emphasis ">
     Password
   </div>

   <v-text-field
     :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
     :type="visible ? 'text' : 'password'"
     density="compact"
     placeholder="Enter password"
     prepend-inner-icon="mdi-lock"
     variant="outlined"
     @click:append-inner="visible = !visible"
   ></v-text-field>

   <v-checkbox label="Artist"></v-checkbox>

   <v-card
     class="mb-12"
     color="surface-variant"
     variant="tonal"
     width="400"
           >

    
   </v-card>
  
   <v-btn
     block
     class="mb-8"
     color="blue"
     size="large"
     variant="tonal"
   >
     Create user
   </v-btn>

  
 </v-card>

 
 
</div>
    </template>
    <script>
    export default {};
    </script>
# e-store

This is an sample e-store project. It is for learning purpose.

## Steps

1. Installed vue project
2. Quasar - UI Framework for Vue

## APP STRUCTURE

                                                                APP
                                                                /
                                                            HomeView
                                                            /   |   \
                                                        Navbar  /    \
                                                            Banner  Products

# V-for Directive

1. Used for adding some more functionalities and features to our vue application
   e.g. Loop through the data we want to append like products

# Lifecycle Hooks

-> Creation - Component is created
-> Mounting - Components mounts and becomes visible
-> Update - When some data change happens dynamically within the component
-> Unmount - Component destroyed or when we go to some other page

## What are Hooks ?

    - Hooks are functions or methods that helps in accessing lifecycle features.
    - Controlling component based on some event trigger.

## Events and Hooks

    Lifecycle Event                 Hooks

1.  Creation ----------------------beforeCreate, created

2.  Mounting ----------------------beforeMount, mounted

3.  Updating ----------------------beforeUpdate, updated

4.  Unmounting --------------------beforeUnmount, unmounted

Note - In creation phase, we can't access DOM nodes. DOM nodes are accessibe in mounting phase.

## Different Hooks

1. onMounted : When any component is mounted, onMounted hook is triggered.

   onMounted(() => {
   <!-- DOM access here -->

   })

2. onUpdated : When any update happens within the component, onUpdate hook is triggered.

   onUpdated(() => {
   <!-- Updates access here -->

   })

3. onUnmounted : When any component is destroyed/unmounted, onUnmounted hook is triggered.

   onUnmounted(() => {
   <!-- Cleanups here -->

   })

# Vue Router

- useRouter : hook from "vue-router" package for moving from one page to another
- useRoute : hook from "vue-router" to catch the parameters from url

# V - Model

- For reading data typed in input tag dynamically

# Reactive Vs Ref

- Both comes from "vue" and used for making data reactive.
- Ref can be used for any datatype but prefered for int, string, where as Reactive can be used only for objects e.g. forms.
- Ref internally uses Reactive, so Reactive is fundamental.

# API Calls

- Function should be an async function.
- Call Should be made once **component is MOUNTED using lifecycle hook (onMounted)**
- We can use **fetch** or any 3rd party library like **axios**, etc.

# FIREBASE

- Cloud server created by the "Google".
- We can use cloud database to make it available globally.

## Steps for Setup

### Project Setup : Steps

- Goto firebase and login/signup.
- Click on `Get Started` and make a new project.
- Click `Contiue`
- Disable Google Analytics (optional).
- Click on `Create project`
- Once project is ready, click `Contiue`

### Add Firebase to your app : Steps

- Click on web `</>` icon.
- Give name
- Check the box.
- Click `Register app`
- Save the config code somewhere. (Don't worry if you didn't save, you can always find it under `settings > Project settings` later following below steps).
- Keep clicking `Next`

### Create Database / Firestore : Steps

- Goto `Cloud Firestore`.
- Click `Create database`.
- Check `Start in Test mode`.
- Click `Next`.
- Choose the closest server.
- Click `Enable`.
- Perfect, now You're ready to actually add collections.

### Connnect Firebase to your app : Steps

- Goto `Settings > Project settings` you'll find the config code.
- Click `Goto Docs` icon.
- Click `Firebase Fundamentals`
- Click `Add Firebase to your apps`. (Select iOS, Android, web as per your machine. Mine is Web).
- You'll find how to get started, just follow the steps.

- Step 1: Create a Firebase project and register your app (we already did above).
- Step 2: Install the SDK and initialize Firebase

  - `npm install firebase`
  - Create `firebase.js` file under "src" folder and copy the config code.
  - Visit 'docs' for more detials : [https://firebase.google.com/docs/]

- Now, you're ready to import different methods in `firebase.js` and export to use them.

# What is the difference between Firebase storage and Firestore ?

Firesbase storage are used for storing images, videos, etc.
Firestore is for storing json data

# Global State Management

- Pinia:
  - Tool provided by vue for global state management.
  - It is like a one store containing all the data/state.
  - Better readability, performance
  - Suitable for large and complex applications.
  - `npm install pinia` or visit [https://pinia.vuejs.org/] for more details

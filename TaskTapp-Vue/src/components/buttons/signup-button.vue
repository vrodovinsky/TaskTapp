<template>
  <a class="button__sign-up" @click="handleSignUp">Sign Up</a>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect } = useAuth0()

const handleSignUp = () => {
  loginWithRedirect({
    appState: {
      target: '/user'
    },
    authorizationParams: {
      screen_hint: 'signup'
    }
  })
}
</script>

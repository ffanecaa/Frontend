<script>
    import { navigate } from "svelte-routing/src/history";
    import { autorizado } from "../../lib/servizoAutorizacion.mjs"
 //   import Sesion from "../Usuarios/Sesion.svelte";
  import UserRuta from "../Usuarios/UserRuta.svelte";
    if ( ! $autorizado) navigate("/registro/")
</script>

{#if $autorizado}
    <slot/>
{:else}
    <UserRuta/>
{/if}
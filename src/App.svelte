<script>
	import Router from "svelte-spa-router"

	import Home from "./routes/Home.svelte"

	let routes = {
		"/": Home,
	}

</script>

<main>
	<Router {routes}/>
</main>
<script>
	import Router from "svelte-spa-router"

	import Home from "./routes/Home.svelte"
	import Donate from "./routes/Donate.svelte"
	import NotFound from "./routes/NotFound.svelte"

	const routes = {
		"/": Home,
		"/donate": Donate,
		"*": NotFound, 
	}

</script>

<main>
	<Router {routes}/>
</main>
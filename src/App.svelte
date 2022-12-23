<script>
	import Router from "svelte-spa-router"

	import Home from "./routes/Home.svelte"
	import Donate from "./routes/Donate.svelte"
	import NotFound from "./routes/NotFound.svelte"
	import Projects from "./routes/Projects.svelte"
	import Admin from "./routes/Admin.svelte"
	import Panel from "./routes/Panel.svelte"

	const routes = {
		"/": Home,
		"/donate": Donate,
		"/projects": Projects,
		"/admin": Admin,
		"/panel": Panel,
		"*": NotFound, 
	}

</script>

<main>
	<Router {routes}/>
</main>
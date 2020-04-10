renderPage=	["index",		"new",			"show",			"edit"];
matchstring=["/recipes/",	"/recipes/new",	"/recipes/:id",	"/recipes/:id/edit"];
callbacktag=["",			"",			"response.params.id", 			""];
callbacks=	[false,			false,			show, 			false];
action=		["index",		"new",			"show",			"edit"];

for (i=0;i<renderPage.length;i++) {
	let page = renderPage[2];
	app.get(matchstring[2],(request,response)=>{
		callbacks[2](callbacktag[2]);
		response.render(page,data);
	});
}
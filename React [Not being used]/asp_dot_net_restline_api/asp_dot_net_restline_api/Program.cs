using asp_dot_net_restline_api.recents;
using asp_dot_net_restline_api.static_classes;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(swaggerGenOptions =>
{
    swaggerGenOptions.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo{Title="Internet services", Version="v1"});
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseSwagger();
    app.UseSwaggerUI(swaggerUiOptions =>
    {
        swaggerUiOptions.DocumentTitle = "Internet services";
        swaggerUiOptions.SwaggerEndpoint("/swagger/v1/swagger.json", "API debug UI");
        swaggerUiOptions.RoutePrefix = String.Empty;
    });
}

app.UseHttpsRedirection();

/* GET */

/// <summary>
/// Gets all lookups
/// </summary>
app.MapGet("get-lookups", async () => await RestGet.AsyncLookups());

/// <summary>
/// Gets a lookup by id or returns a bad request response
/// </summary>
app.MapGet("get-lookup-using-id/{lookupId}", async (int lookupId)=>
{
    Lookup? available = await RestGet.AsyncLookupById(lookupId);
    if (available == null) return Results.BadRequest("Did not find this Id.");
    else
    {
        return Results.Ok(available);
    }
});

/* POST */

/// <summary>
/// Posts a lookup from a template
/// </summary>
app.MapPost("post-lookup/{URL}/{IP}", async (string URL, string IP) =>
{
    try
    {
        Lookup? newLookup = new Lookup(0, URL, IP);
        if (newLookup == null) return Results.BadRequest("The post request was not valid.");
        bool available = await RestPost.AsyncLookup(newLookup);
        if (!available) return Results.BadRequest("The database connection did not complete.");
    }
    catch (Exception ex)
    {
        return Results.BadRequest("There was an exception in post-lookup.");
    }
    return Results.Ok("You were able to post that.");
});

/* PUT */

/// <summary>
/// Puts a lookup from a template
/// </summary>
app.MapPut("put-lookup/{Id}/{URL}/{IP}", async (int Id, string URL, string IP) =>
{
    try
    {
        Lookup? newLookup = new Lookup(Id, URL, IP);
        if (newLookup == null) return Results.BadRequest("The put request was not valid.");
        bool available = await RestPut.AsyncLookup(newLookup);
        if (!available) return Results.BadRequest("The database connection did not complete.");
    }
    catch (Exception ex)
    {
        return Results.BadRequest("There was an exception in put-lookup.");
    }
    return Results.Ok("You were able to put that.");
});

/* DELETE */

/// <summary>
/// Deletes a lookup from a template
/// </summary>
app.MapDelete("delete-lookup/", async (int lookupId) =>
{
    bool available = await RestDelete.AsyncLookup(lookupId);

    if (!available) return Results.BadRequest("Did not find this Id.");
    else
    {
        return Results.Ok("You were able to delete that.");
    }
});

app.Run();
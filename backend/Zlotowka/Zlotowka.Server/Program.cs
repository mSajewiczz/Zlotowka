using Microsoft.EntityFrameworkCore;
using Zlotowka.Server.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhostDev",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173") 
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers(); 
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();
app.UseCors("AllowLocalhostDev");


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

app.Run();
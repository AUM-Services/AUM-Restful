﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using asp_dot_net_restline_api.recents;

#nullable disable

namespace asp_dot_net_restline_api.recents.migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    [Migration("20220224082430_FirstMigration")]
    partial class FirstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.2");

            modelBuilder.Entity("asp_dot_net_restline_api.recents.Lookup", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("IP")
                        .IsRequired()
                        .HasMaxLength(15)
                        .HasColumnType("TEXT");

                    b.Property<string>("URL")
                        .IsRequired()
                        .HasMaxLength(256)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Lookups");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 2,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 3,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 4,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 5,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 6,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 7,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 8,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 9,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 10,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 11,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 12,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 13,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 14,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 15,
                            IP = "255.255.255.255",
                            URL = "startup"
                        },
                        new
                        {
                            Id = 16,
                            IP = "255.255.255.255",
                            URL = "startup"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}

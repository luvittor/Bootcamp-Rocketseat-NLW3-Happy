Brazilian Bootcamp
NLW#3 (NEXT LEVEL WEEK #3)
by Rocketseat

# My Impressions #

	This bootcamp was moderate hard to follow.
	
	I didn't pay to much attention to the backend because my main goal with this Bootcamp is to learn frontend with React.
	
	I feel a bit old school. My background is ASP.NET/PHP/HTML/JAVASCRIPT/Java/DotNet from 90s/2000s.
	
	In the past years (2010s) I programmed less and when I did it was like in the old days and more backends.
	
	But I am adapting!
	
	Today it seems it's all about packages and parameters and less coding itself.
	
	JavaScript nowadays is really different from 90s.

	In the old days when I needed something in PHP I had to write myself or look for solutions in foruns or code snippets repositories.
	
	There was no app to manage packages or versioning.
	
	We have to download the packages ourselves looking for it on different sources after googling. And you sometimes you had to audit the code because the source may not seem trustworth.
	
	We had several copies of our source code files side by side like: user.php and user.php.old and user.php.old.old (LOL).
	
	Nowadays I feel like coding it is like a LEGO toy, in the past it was more like collage.

# Workshop #1 #

	Environment

		1. Open Powershell as Adm

		2. Changed permissions Windows
		
			# Set-ExecutionPolicy RemoteSigned
			# Get-ExecutionPolicy

		3. *Chocolatey* (Package manager)
		
			# Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
			# choco /?

		4. *Node JS* (JavaScript runtime)
		
			# cinst nodejs-lts
			# refreshenv
			# node -v

		5. *NPM* (Node package manager)
		
			# npm -v

		6. *Yarn* (dependency/package manager for Node modules)
		
			"its like npm but better"
			
			# cinst yarn
			# yarn --version
		
	Concepts

		Explain how *RESTful API* works and gives a *JSON* example.
		
	What's *REACT*?

		Interface construction
		
		SPA (Single Page App) - it doesn't needs to refresh the whole page
		
		Use cases: Twitter, Netflix, Figma, Notion...
		
	Why we'll use *TypeScript*?

		Created by Microsoft.
		
		Range of tools build on JavaScript.
	
		Define object models (JSON).
		
	Hands On!
	
		**FRONT END  C:\Users\lucia\Desktop\dev\NLW#3\aulas\web**
	
		Create REACT PROJECT!
	
			This project will be bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
		
			# yarn create react-app web --template typescript
			
			(
			
				*ALTERNATIVE TO YARN*

				# npx create-react-app web --template typescript
			
				npx is part of node that executes third part packages

			)

			================
			==== RESULT ====
			================
			Success! Created web at C:\Users\lucia\Desktop\dev\NLW#3\aulas\web
			Inside that directory, you can run several commands:

			  yarn start
				Starts the development server.

			  yarn build
				Bundles the app into static files for production.

			  yarn test
				Starts the test runner.

			  yarn eject
				Removes this tool and copies build dependencies, configuration files
				and scripts into the app directory. If you do this, you can’t go back!

			We suggest that you begin by typing:

			  cd web
			  yarn start
			  
			Happy hacking!
			Done in 216.66s.				
			================
				
			# cd web

			Open Visual Studio
			
			# code . 
				
		Visual Studio Code
		
			Remove a lot of files that won't be used and creates a "Hello World" in "App.tsx".
			
			CTRL + SHIFT + P *list of commands of VSCode*
			
			Toggle Integrated Terminal *open terminal*
			
			# yarn start
			
			*open localhost:3000 with Hello World*
			
			demonstrate of hot refresh
			
			explain .tsx file - JSX (javascript xml) - html inside javacript
			
			
			REACT DOM - intagration of react with DOM (HTML)
				other type of integration
					*React Native for apps
					*React TV
					*React VR
				
			Components Properties Interface Explanation
			
				import React from 'react';

				interface TitleProps {
				  text: string;
				}

				function Title(props: TitleProps){
				  return <h1>Hello NLW {props.text}</h1>
				}

				function App() {
				  return (
					<div className="App">
					  <Title text="titulo 1" />
					  <Title text="titulo 2" />
					</div>
				  );
				}

				export default App;

			**Landing Page**
			
				Style / CSS / SVGs / Export *Figma* / Google Fonts
				
				# yarn add react-icons
				
				packages refer to icon styles
				
				# import { FiArrowRight } from 'react-icons/fi'
				
				# <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
			
			**Map Page**
			
				Route System (URL Mapping) #react-router-dom
				
				# yarn add react-router-dom
				
				to identify types in IDE (param -D means it will be used in Dev Env only)
				
				# yarn add @types/react-router-dom -D
				
				# import { BrowserRouter, Switch, Route } from 'react-router-dom';
				
				creation of routes
				
				using object <Link to> instead of <a href=>
				
				# import { Link } from 'react-router-dom';
				
				    <Link to="./app" className="enter-app">
						<FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
					</Link>

				*MAP API OPTION#2 OPENSTREETMAP*

					# yarn add leaflet react-leaflet
					# yarn add @types/react-leaflet -D
					
					# import  { Map, TileLayer } from 'react-leaflet';
					# import 'leaflet/dist/leaflet.css';
					
					<Map 
						center={[-23.0308092,-45.5539208]}
						zoom={15}
						style={{width: '100%', height: '100%'}} 
					>
						<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					</Map>

					*MAP API OPTION#2 MAP BOX*

					Requires Account and a Token. * refer to **Setting Environment Param** to set REACT_APP_MAPBOX_TOKEN
					
					<TileLayer url={'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}'} />
					<TileLayer url={'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}'} />
					
					*MAP API OPTION#2 GOOGLE*
					
					Requires creadit card.

				**Setting Environment Param**
				
					1. Create a .env file
					
					2. Create a parameter with this prefix *REACT_APP_*:
					
						# REACT_APP_MAPBOX_TOKEN=pk.example
						
					3. Add to .git_ignore the file .env so it will be private
					
					4. When change .env file CTRL+C to finish the APP and start again:
					
						# yarn start
			
# Workshop #2 #

	**BACK END  C:\Users\lucia\Desktop\dev\NLW#3\aulas\backend**
	
	TypeScript
	Node.js
	
	**Creating Server
	
		# code .
		
		VSCODE TERMINAL
		
		# PS C:\Users\lucia\Desktop\dev\NLW#3\aulas\backend> yarn init -y
		
		# yarn add express  
		# yarn add @types/express -D
		
		*create src/server.ts
		
			# import express from 'express';
			# const app = express();
			# app.use(express.json());
			# app.listen(3333);

		# yarn add typescript -D
		# yarn tsc --init
		
		*change param in tsconfig.json
		
			# "target": "es2017"
		
		# yarn add ts-node-dev -D
		
		*add param to package.json
		
			"scripts": {
				"dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts"
			},
		
		start the *script dev*
		
			# yarn dev
	
	**Creating Routes
	
		*add route /users to server.ts
	
			# 	app.get('/users', (request, response) => {
			# 		return response.send("Hello World!");
			# 	});
	
			Route = /users
			Resources = users
			
			Methods = HTTTP { 
				GET, // get data (list, item)
				POST, // create data
				PUT, // edit data
				DELETE // delete data
			}

			Query Param http://localhost:3333/users?param=value&param2=value2
			Route Param http://localhost:3333/users/1 (Resource Id)
			Body Param (POST DATA)

		*Installing https://insomnia.rest/download/#windows to test http requests
	
	**Database
		
		*3 options
		
			1. native drivers 
			
				install sqlite packege and have direct access to the query method no abstraction
				
				# sqlite3.query('SELECT *')
				
			2. query builder 
			
				second abstraction level: *knex.js*
				
				# knex('users').select('*').where('name', 'Luciano');
				
			*3. ORM (Object Relational Mapping) (CHOOSEN)
			
				a class will represent a table
				table: user => class: User
				an object for each row
				
				(typeorm uses knex)
		
		# yarn add typeorm sqlite3
		
		*create /src/database/database.sqlite
		
		*create ormconfig.json
		
			{
				"type": "sqlite",
				"database": "./src/database/database.sqlite"
			}
		
		*create /src/database/connection.ts		
		
			import  { createConnection } from 'typeorm';
			createConnection();
			
		*import in server.ts
		
			import './database/connection';
			
		* create tables
		
			*methods
			
				1. create tables sql bla bla bla
				
				2. migrations *choosen*
				
		* config typeorm on typescript
			
			package.json (add line "typeform")
			
				  "scripts": {
						"dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts",
						"typeorm" : "ts-node-dev ./node_modules/typeorm/cli.js"
					},
		
		* creating migrations
		
			add migrations, entities and cli to ormconfig.json
				
			{
				"type": "sqlite",
				"database": "./src/database/database.sqlite",
				"migrations": [
					"./src/database/migrations/*.ts"
				],
				"entities": [
					"./src/models/*.ts"
				],
				"cli": {
					"migrationsDir": "./src/database/migrations"
				}
			} 			
			
			# yarn typeorm migration:create -n create_orphanages
			
			this command should create a file inside migrations called create orphanages
			
				*ORIGINAL*

					import {MigrationInterface, QueryRunner} from "typeorm";

					export class createOrphanages1602643409203 implements MigrationInterface {

						public async up(queryRunner: QueryRunner): Promise<void> {

						}

						public async down(queryRunner: QueryRunner): Promise<void> {

						}

					}
				
				*MODIFIED*
				
					import {MigrationInterface, QueryRunner, Table} from "typeorm";

					export class createOrphanages1602643409203 implements MigrationInterface {

						public async up(queryRunner: QueryRunner): Promise<void> {

							await queryRunner.createTable(new Table({
								name: "orphanages",
								columns: [
									{
										name: "id",
										type: 'integer',
										unsigned: true,
										isPrimary: true, 
										isGenerated: true,
										generationStrategy: 'increment',
									},
									{
										name: 'name',
										type: 'varchar'
									},
									{
										name: 'latitude',
										type: 'decimal',
										scale: 10,
										precision: 2
									},
									{
										name: 'longitude',
										type: 'decimal',
										scale: 10,
										precision: 2
									},
									{
										name: 'about',
										type: 'text'
									},
									{
										name: 'instructions',
										type: 'text'
									},
									{
										name: 'opening_hours',
										type: 'varchar'
									},
									{
										name: 'open_on_weekends',
										type: 'boolean'
									}
								]
							}))

						}

						public async down(queryRunner: QueryRunner): Promise<void> {
							await queryRunner.dropTable('orphanages');
						}

					}

			# yarn typeorm migration:run
		
			using beekeeper studio portable to view the sqlite db
		
		* change param in tsconfig.json "strictPropertyInitialization": false so you wont need to init the properties on model classes

		* enable experimental decorator on tsconfig.json
		
			"experimentalDecorators": true,
			"emitDecoratorMetadata": true,
		
		* create class src/Models/Orphanage.ts
			
			import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

			@Entity('orphanages')
			export default class Orphanage {
				@PrimaryGeneratedColumn('increment')
				id: number;

				@Column()
				name: string;

				@Column()
				latitude: number;

				@Column()
				longitude: number;

				@Column()
				about: string;

				@Column()
				instructions: string;

				@Column()
				opening_hours: string;

				@Column()
				open_on_weekends: boolean;
			}
			
		* creating route to orphanage insertion on server.ts
		
			app.post('/orphanages', async (request, response) => {
				console.log(request.body);

				const { 
					name,
					latitude,
					longitude,
					about,
					instructions,
					opening_hours,
					open_on_weekends
				} = request.body;

				const orphanagesRepository = getRepository(Orphanage);

				const orphanage = orphanagesRepository.create({
					name,
					latitude,
					longitude,
					about,
					instructions,
					opening_hours,
					open_on_weekends
				});

				await orphanagesRepository.save(orphanage);

				return response.status(201).json(orphanage);
			});
		
	**Abstraction (MVC - Model, View, Controller)
	
		Separates de code in different folders following the MVC pattern.
		
	**Upload of Images to the server and a New Table to link these imgs to orphanages (Create Migration typeorm)
	
		# yarn typeorm migration:create -n create_images
		
		import {MigrationInterface, QueryRunner, Table} from "typeorm";

		export class createImages1602707441102 implements MigrationInterface {

			public async up(queryRunner: QueryRunner): Promise<void> {
				await queryRunner.createTable(new Table({
					name: "images",
					columns: [
						{
							name: "id",
							type: 'integer',
							unsigned: true,
							isPrimary: true, 
							isGenerated: true,
							generationStrategy: 'increment',
						},
						{
							name: 'path',
							type: 'varchar'
						},
						{
							name: 'orphanage_id',
							type: 'integer'
						}
					],
					foreignKeys: [
						{
							name: 'ImageOrphanage',
							columnNames: ['orphanage_id'],
							referencedTableName: 'orphanges',
							referencedColumnNames: ['id'],
							onUpdate: 'CASCADE',
							onDelete: 'CASCADE'
						}
					]
				}))        
			}

			public async down(queryRunner: QueryRunner): Promise<void> {
				await queryRunner.dropTable('images');
			}

		}

		# yarn typeorm migration:run
		
		Library to add file upload
		
		# yarn add multer
		# yarn add @types/multer -D
		
		
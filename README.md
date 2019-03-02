# WeatherChart

## Description

App to get city weather information, with detailed info showed as charts.

## User Stories

-  **404:** As a User, if I try to enter a route on my domain that  doesn't exist, I will be redirected to the Dashboard screen
-  **Signup:** As a User I want to be able to sign-up / sign-in using OAuth protocols, specifically google.
-  **Login:** As a User I want to be able to login to my app. Access to basic features of the app will not be login restricted 
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Search cities** As a User I want to be able to enter the name of a city in a searchbar and see results based on my input.
-  **Add cities to my dashboard** As a user I want to select a city and add it to my dashboard.
-  **See weather information** As a user I want to see basic information about the weather in the cities in my dashboard
-  **Save cities** As a logged User I want save cities of my dashboard so I can see their information next time I enter the app.
-  **See info of a city** As a User I want to be able to see more detailed information about the weather in a city added to my dashboard (weather in the next days, pressure)

## Backlog

Charts:
- Make different charts for the data shown in the page
- Make the charts interactive
- Link different charts together so the interaction of the user affects them all.

User profile:
- Have a User settings page.
- Selecting a default city.

Geo Location:
- Add geolocation.
- Show weather data based on the location of the user

Drag and drop components:
 - Make the cities in the dashboard draggable so the user can sort them the way he wants.
 - Save the positions of the cities in the dashboard for logged users so the order is preserved during sessions.
 - Be able to arrange the different charts of the detailed info section in different places. Also save the preferences for logged users.

Chart transitions:
  - Make transitions for the charts so when the data changes it is shown in a smooth way

Component transitions:
  - Make animations for the enter/leave cycles of the components when the component rendered changes (implementing react transitions).




  
# Client

## Routes
| Method | Path               | Component | Permissions | Behaviour                               |
|--------|--------------------|-----------|-------------|-----------------------------------------|
|        | /                  | Homepage  | None        | Shows the homepage of the app           |
| get    | /cities/:id        | City      | None        | Shows detailed information about a city |
| get    | /profile *(Backlog)* | Profile   | Logged user | Shows user profile page                 |




## Components

 - City card Component:
  Input: city(id, name country, temp, rain, )
 - Header component:
  Button: Login / signup / logout

 - City Weather Component:
  Input: cityWeather
  Output: date

  - General weather Component:
  Output: currentTemp, forecast
  
  - Temperature Component:
    Output: max_temp, min_temp, avg_temp
  
  - Humidity Component:
    Output: humidity
  
  - Pressure Component:
    Output: groundLevel, seaLevel

  - Wind Component:
    Output: windSpeed, windDeg
  
  - RainSnow Component:
    Output: rainChance, snowChance
  
  - Clouds Component:
    Output: cloudiness
  

## Services

- WeatherChart will work with a Redux architecture, which eliminates the need of services by centralizing API calls in the actions. 

- Also, the app will get the weather information from [Openweathermap](https://openweathermap.org) 

# Server

## Models

User model

```
googleID : String
```


## API Endpoints (backend routes)

- GET /auth/google
  - redirect to /auth/google/callback if successful
- GET /auth/google/callback
  - 200 with User if successful
- GET /auth/logout
  - receive status code 204 if successful
- GET /cities
  - receive array of cityIDs when successful
- POST /cities
  - body:
    - cityID
  - Links a new CityID to a user
  - updates user in session  
- DELETE /cities/:id
  - remove from favorites
  - updates user in session


  

## Links

### Trello/Kanban

[Kanban board](https://drive.google.com/file/d/1jY73-UEnGDB4E1WLpQzQ7rQAtZOnZZ2M/view?usp=sharing) 

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](https://slides.com/matiasferreiro/weatherchart#/)
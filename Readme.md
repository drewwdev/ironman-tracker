````
# Old School RuneScape Ironman Tracker

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

The Old School RuneScape Ironman Tracker is a web application built to track the progress of Ironman accounts in Old School RuneScape. It allows Ironman players to monitor their skill levels, achievements, and other statistics in their journey towards becoming self-sufficient adventurers.

The web app is developed using TypeScript and utilizes Tailwind CSS for the frontend UI. Data is retrieved from the Wise Old Man API, and the Official Old School Runescape Highscores which provides comprehensive data on Old School RuneScape player stats and achievements.

This project was inspired by a Reddit thread in the Ironscape community, which you can find here: [Ironscape Reddit Thread](https://www.reddit.com/r/ironscape/comments/12zrf12/i_have_been_working_on_a_huge_goals_and/).

## Features

- Track skill levels and experience for various activities in Old School RuneScape.
- View and compare achievements with other Ironman players.
- Set goals and milestones to track progress towards specific objectives.
- Visualize progress through interactive charts and graphs.

## Installation

1. Clone the repository:

```shell
git clone https://github.com/drewwdev/osrs-ironman-tracker.git
````

2. Navigate to the project directory:

```shell
cd osrs-ironman-tracker
```

3. Install the dependencies:

```shell
npm install
```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the necessary environment variables (e.g., API keys) to the `.env` file.

5. Start the development server:

```shell
npm start
```

6. Open your browser and visit `http://localhost:5173` to access the web app.

7. Set up the Express API:

   - Navigate to the `api` directory:

     ```shell
     cd api
     ```

   - Install the API dependencies:

     ```shell
     npm install
     ```

   - Set up environment variables:

     - Create a `.env` file in the `api` directory.
     - Add the necessary environment variables for the API.

   - Start the Express server:

     ```shell
     npm start
     ```

   - The API will be accessible at `http://localhost:3000`.

## Usage

- Register or log in to your Ironman account.
- Connect your account to the Wise Old Man API by providing your API key.
- Explore the various features to track your progress, set goals, and view achievements.
- Customize the app by modifying the code to suit your needs.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Please follow the project's code style and guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Wise Old Man API: [https://docs.wiseoldman.net/](https://docs.wiseoldman.net/)
- Ironscape Reddit Thread: [https://www.reddit.com/r/ironscape/comments/12zrf12/i_have_been_working_on_a_huge_goals_and/](https://www.reddit.com/r/ironscape/comments/12zrf12/i_have_been_working_on_a_huge_goals_and/)
- osrs-json-hiscores: [https://github.com/maxswa/osrs-json-hiscores](https://github.com/maxswa/osrs-json-hiscores)

```

```

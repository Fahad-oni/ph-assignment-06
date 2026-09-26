# FitLog

FitLog is a workout library and daily-plan app. Browse exercises, view workout
details, add workouts to today's plan, save workouts for later, and review or
sort your lists from the My Plan page.



## Project Structure

```text
src/
	app/          App Router pages and global styles
	assets/       Local images used by the interface
	components/   Page, workout, and shared UI components
	context/      Shared plan and saved-workout state
types/          Workout data types
```

## Workout Data and State

The workout library is fetched from `https://api.abcz.workers.dev/api/fitlog` by
the workout listing and detail pages. The app needs network access to that
endpoint to load workout data.

Planned and saved workouts are currently stored in React context in memory. They
are shared between pages during the current app session, but are not persisted
to a database or browser storage and will be reset after a full page refresh.

## Built With

- Next.js App Router
- React and TypeScript
- Tailwind CSS and DaisyUI
- React Icons and React Toastify

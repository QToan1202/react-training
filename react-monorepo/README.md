# Practice Three

## Design

[Design Template](https://www.libib.com/)

## Topic name

Management Library System Web App

## Timeline

Estimate: **7 days** (_July 05, 2023 - July 13, 2023_)

## Team size

- 1 developer (Toan)
- Mentor: Thai Quang Anh Tuan

## Details plan

- Estimation details plan: [**_Plan_**](https://docs.google.com/document/d/108l2Gj7QP58zyw1Udef9UL6NE2JhJNCf/edit?usp=sharing&ouid=106375431505893946552&rtpof=true&sd=true)

## Technical

- Nx
- React 18
- React router DOM
- React-hook-form
- Vite
- Vitest
- Zustand
- React Query
- Chakra UI
- Json-server
- TypeScript

## Target

- Build React app to manage books and hire requests from members
- Know how to use 3rd party UI libraries
- Applying state management
- Apply Nx in practice
- Lighthouse performance score over 95

## Features

- Build an admin dashboard page to manage the list of books, members, and hire requests
- Admin can add/edit/remove the books
- Admin can add/edit/complete the hire requests
- Each member can hire up to five books and send up to five book hire requests
- Each book can only be rented for a maximum of 10 days from the date of rental start
- Highlight the hire book requests that are overdue
- Admins can complete hire book requests from the user. When the hire request is marked as completed, the hired book quantity for the user will be +1
- The delete action requires confirmation
- Validate each form controls

## Install and Run

Open Windows PowerShell or cmd or [Windows Terminal](https://www.microsoft.com/en-gb/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab)

**_Step 1:_** Clone develop branch

```bash
git clone --single-branch --branch develop git@github.com:QToan1202/react-training.git
```

**_Step 2:_** Move to _react-monorepo_ folder

```bash
cd react-training/react-monorepo
```

**_Step 3:_** Install project

```bash
npm install
```

**_Step 4:_** Run json-server

```bash
npm run server
```

**_Step 5:_** Run project in dev mode

```bash
npm run admin:serve
npm run member:serve
```

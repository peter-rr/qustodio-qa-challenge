# Task 1: Test Cases

As common preconditions for every test, the user should first:
1. Log into Qustodio app and choose the child you want to create a routine for.
2. Navigate to Rules and then Routines section.

  

## Key scenarios for "Routines" feature

- [Add new routine](#tc_001--add-new-routine)
- [Edit routine - Rules and style](#tc_002--edit-routine---rules-and-style)
- [Edit routine - Time slots](#tc_003--edit-routine---time-slots)
- [Create custom routine](#tc_004--create-custom-routine)
- [](#tc_00)
- [](#tc_00)

## TC_001 | Add new routine

- **Description:** Ensure the user can create a new routine.

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
| Select "Add routine" and choose one of the presets from the list.  | The routine side panel is displayed with all the parameters to set up. |
| Schedule a time slot by selecting the time and the days you want the routine to run. | The "Save routine" button is now enabled. |
| Select "Save routine". | The new routine is now displayed on the routines list. |
| Select the calendar icon. | The new routine is scheduled and displayed on the calendar. |


## TC_002 | Edit routine - Rules and style

- **Description:** Ensure the user can edit a routine previously saved.

- **Preconditions:**
At least one routine should have been created previously.

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
| Click on the routine you want to edit and then choose "Edit app rules". | The different options for "Edit app rules" are displayed so you can apply the changes you want to make. |
| On the same routine choose "Edit website rules". | The different options for "Edit website rules" are displayed so you can apply the changes you want to make. |
| On the same routine choose "Change style". | The different options for "Change style" are displayed so you can apply the changes you want to make. |


## TC_003 | Edit routine - Time slots

- **Description:** Ensure the user can edit a routine previously saved.

- **Preconditions:**
At least one routine should have been created previously, containing one or more time slots.

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
| Click on the routine you want to edit, then choose any existing time slot and edit the time or days. | The edited time slot is correctly displayed on the calendar. |
| On the same routine try to add a new time slot. | The new time slot is also displayed on the calendar. |
| On the same routine try to disable time slots option. | The time slots are no longer displayed on the calendar. The routine is still displayed on the routines list with "Disabled" label on it. |
| On the same routine choose any existing time slot and try to delete it. | The time slot is no longer displayed on the calendar. The routine is still displayed on the routines list. |

## TC_004 | Create custom routine

- **Description:** 

- **Preconditions:**

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
|





# Task 1: Test Cases

As common preconditions for every test, the user should first:
1. Log into Qustodio app and choose the child you want to create a routine for.
2. Navigate to Rules and then Routines section.

  

## Key scenarios for "Routines" feature

- [Add new routine](#tc_001--add-new-routine)
- [Edit routine - Rules and style](#tc_002--edit-routine---rules-and-style)
- [Edit routine - Time slots](#tc_003--edit-routine---time-slots)
- [Create custom routine - Device blocks](#tc_004--create-custom-routine---device-blocks)
- [Create custom routine - App and website rules](#tc_005--create-custom-routine---app-and-website-rules)
- [Delete routine](#tc_006--delete-routine)
- [Time slot overlapping](#tc_007--time-slot-overlapping)
- [Routine's name already existing](#tc_008--routines-name-already-existing)
- [Empty field warning](#tc_009--empty-field-warning)

---
## TC_001 | Add new routine

- **Description:** Ensure the user can create a new routine.

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
| Select "Add routine" and choose one of the presets from the list.  | The routine side panel is displayed with all the parameters to set up. |
| Schedule a time slot by selecting the time and the days you want the routine to run. | The "Save routine" button is now enabled. |
| Select "Save routine". | The new routine is now displayed on the routines list. |
| Select the calendar icon. | The new routine is scheduled and displayed on the calendar. |

---
## TC_002 | Edit routine - Rules and style

- **Description:** Ensure the user can edit a routine previously saved.

- **Preconditions:**
At least one routine should have been created previously.

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
| Click on the routine you want to edit and then choose "Edit app rules". | The different options for "Edit app rules" are displayed so you can apply the changes you want to make. |
| On the same routine choose "Edit website rules". | The different options for "Edit website rules" are displayed so you can apply the changes you want to make. |
| On the same routine choose "Change style". | The different options for "Change style" are displayed so you can apply the changes you want to make. |

---
## TC_003 | Edit routine - Time slots

- **Description:** Ensure the user can edit a routine previously saved.

- **Preconditions:**
At least one routine should have been created previously, containing one or more time slots.

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
| Click on the routine you want to edit, then choose any existing time slot and edit the time or days. | The edited time slot is correctly displayed on the calendar. |
| On the same routine try to add a new time slot. | The new time slot is also displayed on the calendar. |
| On the same routine try to disable time slots option. | The time slots are no longer displayed on the calendar. The routine won’t run at the scheduled times but is still displayed on the routines list with "Disabled" label on it. |
| On the same routine choose any existing time slot and try to delete it. | The time slot is no longer displayed in either the routine or the calendar. The routine is still displayed on the routines list with "Enabled" label on it. |

---
## TC_004 | Create custom routine - Device blocks

- **Description:** Ensure the user can create custom routines to block devices.

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
| Select "Add routine" and choose "Custom" from the list.  | The routine side panel is displayed showing the types of rules to customize. |
| Select "Device blocks". | The different types of blocks to select are displayed. |
| Choose the type of block you want to use in this routine. | Name and style parameters to set up are displayed. |
| Choose a name, color and icon for the routine. Also write a description if you want. | The options to set up a time slot are displayed. |
| Schedule a time slot by selecting the time and the days you want the routine to run. | The "Save routine" button is now enabled. |
| Select "Save routine". | The new routine is now displayed on the routines list. |
| Select the calendar icon. | The new routine is scheduled and displayed on the calendar. |

---
## TC_005 | Create custom routine - App and website rules

- **Description:** Ensure the user can create custom routines to set special app and website rules.

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
| Select "Add routine" and choose "Custom" from the list.  | The routine side panel is displayed showing the types of rules to customize. |
| Select "App & Website rules". | The different app rules to choose are displayed. |
| Select a general app rule to block or allow all apps during the routine. | "Add" button (plus sign) is now enabled to add App exceptions. |
| Select the apps you want to exclude from the general rule. Save and then continue. |  The different website rules to choose are displayed. |
| Select a general website rule to block or allow website categories during the routine. | The Category exceptions box is displayed accordingly. |
| Select the categories you want to exclude from the general rule. Save and then continue. | The different time limit options to choose are displayed. |
| Choose a time limit option and continue. | Name and style parameters to set up are displayed. |
| Choose a name, color and icon for the routine. Also write a description if you want. | The options to set up a time slot are displayed. |
| Schedule a time slot by selecting the time and the days you want the routine to run. | The "Save routine" button is now enabled. |
| Select "Save routine". | The new routine is now displayed on the routines list. |
| Select the calendar icon. | The new routine is scheduled and displayed on the calendar. |

---
## TC_006 | Delete routine

- **Description:** Ensure the user can delete any existing routine.

- **Preconditions:**
At least one routine should have been created previously.

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
| Click on the routine you want to delete and then choose "Delete routine". | A dialog box to confirm the action is displayed on the screen. |
| Select the "Delete" option. | The time slots and rules you’ve set are completely removed. The routine is no longer displayed in either the routines list or the calendar. |

---
## TC_007 | Time slot overlapping

- **Description:** Ensure the user cannot create different routines with overlapping time slots.

- **Preconditions:**
At least one routine should have been created previously, containing one or more time slots.

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
| Select "Add routine" and choose one of the presets from the list.  | The routine side panel is displayed with all the parameters to set up. |
| Set a time slot which overlaps with any time slot from the routine previously created. | A warnig message is displayed to inform another routine is already scheduled at that time. The "Save routine" button remains disabled. |
| Change the time slot so it doesn't overlap with any time slot from the routine previously created. | The warning message is not displayed anymore. The "Save routine" button is now enabled so the new routine can be created. |

---
## TC_008 | Routine's name already existing

- **Description:** Ensure the user cannot create different routines with the same name.

- **Preconditions:**
At least one routine should have been created previously.

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
| Select "Add routine" and choose "Custom" from the list.  | The routine side panel is displayed showing the types of rules to customize. |
| Select any type of rule from the list. | The different options ans rules to set up are displayed. |
| Choose the rules and time limit option you prefer and continue. | Name and style parameters to set up are displayed. |
| Enter the same name of the routine created previously and continue. | A warnig message is displayed to inform the name already exists for another routine. The "Continue" button remains disabled. |
| Change the name so it's different from the name of the routine previously created. | The warning message is not displayed anymore. The "Continue" button is now enabled so the new routine can be created. |

---
## TC_009 | Empty field warning

- **Description:** Ensure the user cannot create a routine without a name.

| TEST STEPS | EXPECTED RESULT |
|:------------|:----------------|
| Select "Add routine" and choose "Custom" from the list.  | The routine side panel is displayed showing the types of rules to customize. |
| Select any type of rule from the list. | The different options ans rules to set up are displayed. |
| Choose the rules and time limit option you prefer and continue. | Name and style parameters to set up are displayed. |
| Leave the "Name" field empty and continue. | A warnig message is displayed to inform you must choose a name for the routine. The "Continue" button is disabled. |
| Enter a name not existing yet for another routine. | The warning message is not displayed anymore. The "Continue" button is now enabled so the new routine can be created. |



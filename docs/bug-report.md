# Task 2: Bug Report

## Title

_**Text from warning message not correctly displayed.**_

## Description

Some text from the "Can't enable time slots" warning message attached is wrong. That message is displayed when trying to enable back time slots from a routine which overlaps with another existing routine. 
Specifically, the word `undefined` should be replaced by the related routine's name instead.

## Environment

## Severity / Priority

## Steps to reproduce

## Actual result

The message from the dialog box we are getting:
```
Some time slots overlap with "undefined" so can't be enabled.
```

## Expected result

The message displayed should be something like:
```
Some time slots overlap with "Study routine" so can't be enabled.
```

## Screenshots / Screen Recordings

- Screenshot attached: ![screenshot](assets/bug-screenshot.png)

- Link to download video: [bug-screencast.mp4](assets/bug-screencast.mp4)

## Logs or Console Errors

## Additional info

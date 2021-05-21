/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const QH_Sensor_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwODEwNjg4NjQ4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyNTMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgzNi40MTYgMTg3Ljc1NDY2N0E0NTcuMjM3MzMzIDQ1Ny4yMzczMzMgMCAwIDEgOTcwLjY2NjY2NyA1MTJhNDU3LjE3MzMzMyA0NTcuMTczMzMzIDAgMCAxLTEyNy4zMTczMzQgMzE3LjE2MjY2N2wtNi42NTYgNi44MDUzMzMtNDUuMzEyLTQ1LjIyNjY2N0EzOTMuMjU4NjY3IDM5My4yNTg2NjcgMCAwIDAgOTA2LjY2NjY2NyA1MTJhMzkzLjE3MzMzMyAzOTMuMTczMzMzIDAgMCAwLTEwOS4xMi0yNzIuNDI2NjY3bC02LjQtNi41NzA2NjYgNDUuMjY5MzMzLTQ1LjIyNjY2N3pNMTg3Ljk2OCAxODcuMzkybDQ1LjIyNjY2NyA0NS4yOTA2NjdBMzkzLjI1ODY2NyAzOTMuMjU4NjY3IDAgMCAwIDExNy4zMzMzMzMgNTEyYTM5My4xNzMzMzMgMzkzLjE3MzMzMyAwIDAgMCAxMDguOCAyNzIuMDg1MzMzbDYuMzc4NjY3IDYuNTQ5MzM0LTQ1LjMzMzMzMyA0NS4yMDUzMzNBNDU3LjIzNzMzMyA0NTcuMjM3MzMzIDAgMCAxIDUzLjMzMzMzMyA1MTJjMC0xMjMuNDEzMzMzIDQ5LjAyNC0yMzkuMTQ2NjY3IDEzNC42MTMzMzQtMzI0LjYwOHogbTkwLjUzODY2NyA5MC40NzQ2NjdsNDUuMTg0IDQ1LjMxMkEyNjUuNjg1MzMzIDI2NS42ODUzMzMgMCAwIDAgMjQ1LjMzMzMzMyA1MTJjMCA2OS41NDY2NjcgMjYuNjg4IDEzNC43NDEzMzMgNzMuNiAxODMuOTU3MzMzbDUuMjkwNjY3IDUuMzk3MzM0LTQ1LjA1NiA0NS40NEEzMjkuNjg1MzMzIDMyOS42ODUzMzMgMCAwIDEgMTgxLjMzMzMzMyA1MTJjMC04OS4wMjQgMzUuMzkyLTE3Mi41MjI2NjcgOTcuMTczMzM0LTIzNC4xMzMzMzN6IG00NjcuMzI4IDAuMzJBMzI5LjY2NCAzMjkuNjY0IDAgMCAxIDg0Mi42NjY2NjcgNTEyYTMyOS42IDMyOS42IDAgMCAxLTkxLjE1NzMzNCAyMjcuOTg5MzMzbC01Ljg4OCA2LjAzNzMzNC00NS4yMjY2NjYtNDUuMzEyQTI2NS42ODUzMzMgMjY1LjY4NTMzMyAwIDAgMCA3NzguNjY2NjY3IDUxMmEyNjUuNiAyNjUuNiAwIDAgMC03Mi44NTMzMzQtMTgzLjE2OGwtNS4yNDgtNS4zNzYgNDUuMjY5MzM0LTQ1LjI2OTMzM3ogbS0zNzcuNTc4NjY3IDkwLjk0NGw0NS4zOTczMzMgNDUuMTJBMTM4LjExMiAxMzguMTEyIDAgMCAwIDM3My4zMzMzMzMgNTEyYzAgMzUuMjg1MzMzIDEzLjIwNTMzMyA2OC4zOTQ2NjcgMzYuNTAxMzM0IDkzLjc2bDQuMjI0IDQuMzk0NjY3LTQ1LjIyNjY2NyA0NS4zMTJBMjAyLjA5MDY2NyAyMDIuMDkwNjY3IDAgMCAxIDMwOS4zMzMzMzMgNTEyYTIwMi4wOTA2NjcgMjAyLjA5MDY2NyAwIDAgMSA1OC45MjI2NjctMTQyLjg2OTMzM3ogbTI4Ny4zNi0wLjEyOEEyMDIuMDkwNjY3IDIwMi4wOTA2NjcgMCAwIDEgNzE0LjY2NjY2NyA1MTJhMjAyLjAyNjY2NyAyMDIuMDI2NjY3IDAgMCAxLTU0LjAxNiAxMzcuNzQ5MzMzbC00Ljc3ODY2NyA0Ljk5Mi00NS40NC00NS4wNzczMzNBMTM4LjA5MDY2NyAxMzguMDkwNjY3IDAgMCAwIDY1MC42NjY2NjcgNTEyYTEzOC4wMjY2NjcgMTM4LjAyNjY2NyAwIDAgMC0zNS45ODkzMzQtOTMuMTg0bC00LjQxNi00LjY1MDY2NyA0NS4zNTQ2NjctNDUuMTYyNjY2ek01MTIgNDI2LjY2NjY2N2E4NS4zMzMzMzMgODUuMzMzMzMzIDAgMSAxIDAgMTcwLjY2NjY2NiA4NS4zMzMzMzMgODUuMzMzMzMzIDAgMCAxIDAtMTcwLjY2NjY2NnoiIGZpbGw9IiMyYzJjMmMiIHAtaWQ9IjQyNTQiPjwvcGF0aD48L3N2Zz4=";

    const QH_Actuator_ICO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABmJLR0QA/wD/AP+gvaeTAAADp0lEQVRoge3az4scRRTA8c9sEsT4M8SAByUieojrilkRFaMHxZ9IDh4F48Z41QTj3X8gIEbwIOjBgyAICoJCSAL+ih68eDBkD/7KBqMhKtm4iYnZXQ/VzdZ2ema7enumxyVfeOxMV9Xr97pev3pVswwvW/E7fsEOjLRrzvK4EzOYj+Rb3NOmUXVZjx8tdiaXWbyL61qzLpHVOKjcmVj+wE4JYTiGV7A3k93ZtX7zmouN/xr/llzP28Z7KRzT+wkdwGjzfoBnS+63X5i1O/BFF5su4E2sKyp8Aqd7OJPLaTy+DMOfxFSJ3tnC95+E9ymng+fwWxe7TmTtCDNTdOYI3s7kSKFtGrfVdKjMmaLMCJmujGvxhjAzxXFzeac4zM5im/BEcjqYyNricMh5sIKRKfJMhQezGYdKxhorXNgWDVqbSc5EoW/+PnVwvCFn9lRwJqeD53EyG/sZIZvFYZbPzEs4n8mLkYLJqP/LkfJPGnJodYJDOVcIr8DICDZGDV9lStcKT2pNJnuya/P4Mup/U/T5VA1DyrhQY8wMDmOuyfrofIO6ajOCn6Pv9wthdUZYTPOQ251d62BL1D8ee0tDNtUNuVFZ5XC7xTE8EXUsJoXthb556l4jhFzbSeHzvOFApPBs5lQxbW+3OG3vi9ofbciZRtI2YbqKC+sk3slkstA2jU0VblrGQBZWQjlTpfSZxmM1nSGUWEdL9DZR+sRrKMI7sb+HM/vUn5mlaLw4jRkVFs29eD37XFa7bV6+H4todPuQur3dinN4JNXqHlTd4J1Q4ZzhYbyHm5e46Tph5uYy5d8LabspNgjrW+3wivkgG/SRUMs9gLtwL14Q9vNnSm60qxFXFhgvuc+Su9MyNpYoqiJ/CU+2SZ7CD8KSsaxjrFfVWwzfqm97f7lc92OkXjKLu1uwtxJPqzdLhywumYaKT9Vzqkod1gqbhK1DqkPHcGUL9oJVPdpOCoXgfYk6r87+HqxlUZ+5Cr9Kn6VzuLUFeytRPOmpKh+2YWwVOrpXukvJck5Y+8q4i/crVeSwZuu8JemVFGKO40bptdQG/IlvEscNhPUWDiNS5BSuH5SRVWeIcEDyj7CFTuEyXIOPE8cNhFX4zgqr87ZY2NytmDrvfSuszrsBfxvCOi8lKcRMC+HzUOK4Vuq8br+BDlqmpGfUUobBmVyOphpflnXmU5X0maTM+L/+h6AyLjk07FxyaNgpc+jYwK3ozlQTSrr9wtbGGpS8hf8PhU3ndGScMToAAAAASUVORK5CYII=";

    const QH_SPEECH_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwODEwNzg3MjQ2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUwMzciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3Mi4zMzkyIDkxNC4wODY0di04Ny41NTJhMjQuODQ0OCAyNC44NDQ4IDAgMCAwLTI0LjgzMi0yNC44MzJoLTcxLjAwMTZhMjQuODMyIDI0LjgzMiAwIDAgMC0yNC44MzIgMjQuODMydjg3LjU1MmEyNC44MzIgMjQuODMyIDAgMCAxLTI0Ljg0NDggMjQuODMySDIxOC4xMTJhMjQuODQ0OCAyNC44NDQ4IDAgMCAwLTI0LjgzMiAyNC44MzJ2MzUuNDE3NkEyNC44NDQ4IDI0Ljg0NDggMCAwIDAgMjE4LjExMiAxMDI0SDgwNS44ODhhMjQuODMyIDI0LjgzMiAwIDAgMCAyNC44MzItMjQuODMydi0zNS40MTc2YTI0LjgzMiAyNC44MzIgMCAwIDAtMjQuODMyLTI0LjgzMkg1OTcuMTcxMmEyNC44MTkyIDI0LjgxOTIgMCAwIDEtMjQuODMyLTI0LjgzMnoiIHAtaWQ9IjUwMzgiIGZpbGw9IiMyYzJjMmMiPjwvcGF0aD48cGF0aCBkPSJNNTEyIDg2Ni4wOTkyQTM5My40NzIgMzkzLjQ3MiAwIDAgMSAxMTguNTI4IDQ3Mi42MjcyYTQxLjYgNDEuNiAwIDAgMSA4My4yIDBjMCAxNzEuMDg0OCAxMzkuMTg3MiAzMTAuMjcyIDMxMC4yNzIgMzEwLjI3MnMzMTAuMjcyLTEzOS4xODcyIDMxMC4yNzItMzEwLjI3MmE0MS42IDQxLjYgMCAwIDEgODMuMiAwIDM5My40NDY0IDM5My40NDY0IDAgMCAxLTM5My40NzIgMzkzLjQ3MnpNNzU3LjEyIDM2MS41MTA0VjI0NS4xMkM3NTcuMTIgMTA5Ljc0NzIgNjQ3LjM3MjggMCA1MTIgMFMyNjYuODggMTA5Ljc0NzIgMjY2Ljg4IDI0NS4xMnYxMTYuMzkwNGExNS40MzY4IDE1LjQzNjggMCAwIDAgMTUuNDg4IDE1LjQzNjhoNDU5LjMxNTJhMTUuNDM2OCAxNS40MzY4IDAgMCAwIDE1LjQzNjgtMTUuNDM2OHoiIHAtaWQ9IjUwMzkiIGZpbGw9IiMyYzJjMmMiPjwvcGF0aD48cGF0aCBkPSJNMjY2Ljg4IDQxOS4yNTEybTE1LjQzNjggMGw0NTkuMzY2NCAwcTE1LjQzNjggMCAxNS40MzY4IDE1LjQzNjhsMCAxMy44ODhxMCAxNS40MzY4LTE1LjQzNjggMTUuNDM2OGwtNDU5LjM2NjQgMHEtMTUuNDM2OCAwLTE1LjQzNjgtMTUuNDM2OGwwLTEzLjg4OHEwLTE1LjQzNjggMTUuNDM2OC0xNS40MzY4WiIgcC1pZD0iNTA0MCIgZmlsbD0iIzJjMmMyYyI+PC9wYXRoPjxwYXRoIGQ9Ik0yODQuMDU3NiA1MDYuMzE2OGExNS40MzY4IDE1LjQzNjggMCAwIDAtMTUuMzYgMTcuMjkyOEMyODMuNjQ4IDY0NC43NDg4IDM4Ni44NDE2IDczOC41NiA1MTIgNzM4LjU2YzEyNS4xNTg0IDAgMjI4LjQxNi05My44MTEyIDI0My4yNzY4LTIxNC45NTA0YTE1LjQzNjggMTUuNDM2OCAwIDAgMC0xNS4zNi0xNy4yOTI4eiIgcC1pZD0iNTA0MSIgZmlsbD0iIzJjMmMyYyI+PC9wYXRoPjwvc3ZnPg==";

    const QH_COMMUNICATE_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwODEwODg0NzUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkwMTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY3Ni44NjQgNjY5LjA4MTZsMzkuNTI2NCA0Ni44OTkyQzc4OC4yNzUyIDY1NS4zNiA4MjkuNDQgNTY2Ljg4NjQgODI5LjQ0IDQ3My4wODhjMC0xNzUuMTA0LTE0Mi4zMzYtMzE3LjQ0LTMxNy40NC0zMTcuNDRTMTk0LjU2IDI5Ny45ODQgMTk0LjU2IDQ3My4wODhjMCA5NC40MTI4IDQxLjU3NDQgMTgzLjI5NiAxMTQuMjc4NCAyNDMuOTE2OGwzOS4zMjE2LTQ3LjEwNGMtNTguNTcyOC00OC43NDI0LTkyLjE2LTEyMC42MjcyLTkyLjE2LTE5Ni44MTI4IDAtMTQxLjEwNzIgMTE0Ljg5MjgtMjU2IDI1Ni0yNTZzMjU2IDExNC44OTI4IDI1NiAyNTZjMCA3NS43NzYtMzMuMTc3NiAxNDcuMDQ2NC05MS4xMzYgMTk1Ljk5MzZ6IiBmaWxsPSIjMmMyYzJjIiBwLWlkPSI5MDE5Ij48L3BhdGg+PHBhdGggZD0iTTg0NS4wMDQ4IDE0MC4wODMyQzc1Ni4xMjE2IDUwLjk5NTIgNjM3Ljc0NzIgMi4wNDggNTEyIDIuMDQ4IDM4Ni4yNTI4IDIuMDQ4IDI2Ny44Nzg0IDUwLjk5NTIgMTc4Ljk5NTIgMTQwLjA4MzIgODkuOTA3MiAyMjguOTY2NCA0MC45NiAzNDcuMzQwOCA0MC45NiA0NzMuMDg4YzAgNzQuOTU2OCAxNi45OTg0IDE0Ni42MzY4IDUwLjc5MDQgMjEyLjk5MiAzMi4xNTM2IDYzLjI4MzIgNzkuMDUyOCAxMTkuMzk4NCAxMzUuNzgyNCAxNjIuNDA2NGwzNy4wNjg4LTQ4Ljk0NzJDMTYxLjU4NzIgNzIxLjUxMDQgMTAyLjQgNjAyLjMxNjggMTAyLjQgNDczLjA4OGMwLTIyNS44OTQ0IDE4My43MDU2LTQwOS42IDQwOS42LTQwOS42czQwOS42IDE4My43MDU2IDQwOS42IDQwOS42YzAgMTI4LjIwNDgtNTguMzY4IDI0Ni43ODQtMTYwLjM1ODQgMzI1LjAxNzZsMzcuNDc4NCA0OC43NDI0YzU2LjExNTItNDMuMDA4IDEwMi40LTk5LjEyMzIgMTM0LjE0NC0xNjEuOTk2OCAzMy4xNzc2LTY1Ljk0NTYgNTAuMTc2LTEzNy4yMTYgNTAuMTc2LTIxMS43NjMyIDAtMTI1Ljc0NzItNDguOTQ3Mi0yNDQuMTIxNi0xMzguMDM1Mi0zMzMuMDA0OHoiIGZpbGw9IiMyYzJjMmMiIHAtaWQ9IjkwMjAiPjwvcGF0aD48cGF0aCBkPSJNNTY3LjI5NiA1OTQuMTI0OGM0NS44NzUyLTIxLjA5NDQgNzcuODI0LTY3LjM3OTIgNzcuODI0LTEyMS4wMzY4IDAtNzMuMzE4NC01OS44MDE2LTEzMy4xMi0xMzMuMTItMTMzLjEycy0xMzMuMTIgNTkuODAxNi0xMzMuMTIgMTMzLjEyYzAgNTMuNjU3NiAzMS45NDg4IDk5Ljk0MjQgNzcuODI0IDEyMS4wMzY4TDIzMy42NzY4IDk0NS4zNTY4Yy0xMC4wMzUyIDE1Ljc2OTYtMTAuNjQ5NiAzNS42MzUyLTEuNjM4NCA1Mi4wMTkyczI2LjIxNDQgMjYuNDE5MiA0NC44NTEyIDI2LjQxOTJoNDcwLjAxNmMxOC42MzY4IDAgMzUuODQtMTAuMjQgNDQuODUxMi0yNi40MTkyczguMzk2OC0zNi4yNDk2LTEuNjM4NC01Mi4wMTkyTDU2Ny4yOTYgNTk0LjEyNDh6TTUxMiA0MDEuNDA4YzM5LjUyNjQgMCA3MS42OCAzMi4xNTM2IDcxLjY4IDcxLjY4cy0zMi4xNTM2IDcxLjY4LTcxLjY4IDcxLjY4LTcxLjY4LTMyLjE1MzYtNzEuNjgtNzEuNjggMzIuMTUzNi03MS42OCA3MS42OC03MS42OHpNMjk1LjczMTIgOTYyLjU2TDUxMiA2MjEuNTY4IDcyOC4yNjg4IDk2Mi41NkgyOTUuNzMxMnoiIGZpbGw9IiMyYzJjMmMiIHAtaWQ9IjkwMjEiPjwvcGF0aD48L3N2Zz4=";

    const QH_MP3_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwODEwOTcwMjcwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjU1MDUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwMS4xMDYgODguODI4aDM4Ny45NDZjMzYuNzE2IDAgNjYuNzUyIDMwLjAzNiA2Ni43NTIgNjYuNzM4djcxMy4zMTZjMCAzNi43MDEtMzAuMDM2IDY2LjczOC02Ni43NTIgNjYuNzM4SDUwMS4xMDZjLTM2LjcwMSAwLTY2LjczOC0zMC4wMzYtNjYuNzM4LTY2LjczOFY3ODEuOTJjLTg3LjQ1OS0zMS42MzItMTA0LjE5My0xMjQuNDg3LTEwNC4xOTMtMjIyLjExNmgwLjA1N2MwLTE2LjUzNSAwLjQ3LTMyLjk4NCAxLjE2Ny00OS4xOTFsLTMuNjE3LTEwLjMyNWMtMTYuMzIxLTQ3LjAyNi0zMy4yNTUtOTUuNzM0LTk1LjIzNS0xMDguMDUzdjcuNTYybC02Mi45MzQgMTAuNjk2Yy05LjU0MiAxOC4wNzMtMjguNTEyIDMwLjM5Mi01MC4zNDUgMzAuMzkyLTMxLjQxOCAwLTU2Ljg4Mi0yNS40NjQtNTYuODgyLTU2Ljg2NyAwLTMxLjQxOCAyNS40NjQtNTYuODk3IDU2Ljg4Mi01Ni44OTcgMTguMDQ0IDAgMzQuMTI0IDguNDAzIDQ0LjUzNSAyMS41MDdsNjguNzQ0IDMuOTU4djcuODYyYzU2LjU5OCA3LjU2MyA4NC4xODQgMzguODIzIDEwMi41MTMgNzYuNjkyIDEuMzUzLTMwLjk5IDEuNzUyLTU5LjE3NS0xLjMxLTgxLjQ2My05LjI0My02Ny41MjEtNDMuMzk1LTk0LjgyMy02Ni4wNTQtMTA1LjYzMmwtNC41MyA4Ljg3My02MC45NTUtMTguOTdjLTE2LjY3NiAxMS43OTItMzkuMTY0IDE0LjE4NS01OC42NDcgNC4yNzMtMjguMDAxLTE0LjIyOC0zOS4xNjYtNDguNDY2LTI0LjkzOC03Ni40NzkgMTQuMjQyLTI3Ljk5OSA0OC40NzktMzkuMTY0IDc2LjQ3OC0yNC45MjMgMTYuMDk0IDguMTc2IDI2LjYxOCAyMi45NDQgMjkuOTY1IDM5LjMzNmw1OS41MDMgMzQuNjc4LTMuNDc1IDYuODM3YzI5LjQ4MSAxNC4zNDIgNzEuMjk1IDQ4LjQzNyA4Mi4yMTggMTI4LjAzNCA0LjUxNSAzMi45MjcgMi4yNjUgNzUuMTY4LTAuMTcxIDEyMC42ODUtMC41ODMgMTEuMTIzLTEuMTgzIDIyLjQzMS0xLjcwOSAzMy43OTYgMTMuNzcxIDM4LjA0IDMwLjMwNiA3MS45NzcgNzIuOTMzIDgwLjE5NVYxNTUuNTY1YzAtMzYuNzAxIDMwLjAzNi02Ni43MzcgNjYuNzM4LTY2LjczN3ogbS02Ni43MzggNjU5LjE2OFY2MTYuNzI5Yy0zNi4xNDUtNC42ODQtNTguNDIxLTIxLjMyLTc0LjE1OC00My45MDcgMS4zNjggNzUuMTk3IDE1LjU1MiAxNDUuMTM3IDc0LjE1OCAxNzUuMTc0eiBtMTMwLjYyNi0zOTQuMDcydjE1My4zNDJoNDYuNVYzNTMuOTI0aC00Ni41ek03ODUuNiAyODIuNTg3djI0Ljc2N2g0Ni40ODV2LTI0Ljc2N0g3ODUuNnogbS03My4yMDQgODYuMDQ5djI0Ljc4aDQ2LjQ4NXYtMjQuNzhoLTQ2LjQ4NXogbS03Mi4yMi0yNC43Mzh2MjQuNzY3aDQ2LjV2LTI0Ljc2N2gtNDYuNXogbS03NS4xODItMzIuNTQydjI0Ljc4MWg0Ni41di0yNC43ODFoLTQ2LjV6IG0yMjAuNjA2IDcuOTc2djE4Ny45MzVoNDYuNDg1VjMxOS4zMzJINzg1LjZ6IG0tNzMuMjA0IDg2LjA2MnYxMDEuODcyaDQ2LjQ4NVY0MDUuMzk0aC00Ni40ODV6IG0tNzIuMjItMjEuNzc0djEyMy42NDdoNDYuNVYzODMuNjJoLTQ2LjV6IG01MS45MjYgMjA1LjUyMmMtNDIuMzk4IDAtODAuNzkzIDE3LjE5MS0xMDguNTY1IDQ0Ljk3Ni0yNy43OTkgMjcuNzg2LTQ0Ljk5IDY2LjE4Mi00NC45OSAxMDguNTY2IDAgNDIuMzk4IDE3LjE5MSA4MC43OTMgNDQuOTkgMTA4LjU3OSAyNy43NzEgMjcuNzg1IDY2LjE2NyA0NC45NzYgMTA4LjU2NSA0NC45NzYgNDIuMzk5IDAgODAuNzgtMTcuMTkxIDEwOC41NjYtNDQuOTc2IDI3Ljc4NS0yNy43ODYgNDQuOTc2LTY2LjE4MiA0NC45NzYtMTA4LjU3OSAwLTQyLjM4NC0xNy4xOTEtODAuNzgtNDQuOTc2LTEwOC41NjYtMjcuNzg2LTI3Ljc4NS02Ni4xNjgtNDQuOTc2LTEwOC41NjYtNDQuOTc2eiBtNjMuOTc1IDg5LjU2N2MtMTYuMzY0LTE2LjM3Ny0zOC45OTUtMjYuNTAzLTYzLjk3NS0yNi41MDMtMjQuOTkzIDAtNDcuNjI0IDEwLjEyNS02My45ODkgMjYuNTAzLTE2LjM2MyAxNi4zNjQtMjYuNDkgMzguOTk1LTI2LjQ5IDYzLjk3NSAwIDI0Ljk5MyAxMC4xMjcgNDcuNjI0IDI2LjQ5IDYzLjk4OSAxNi4zNjQgMTYuMzYzIDM4Ljk5NSAyNi40OSA2My45ODkgMjYuNDkgMjQuOTggMCA0Ny42MTEtMTAuMTI3IDYzLjk3NS0yNi40OSAxNi4zNzctMTYuMzY0IDI2LjUwMy0zOC45OTUgMjYuNTAzLTYzLjk4OSAwLTI0Ljk4LTEwLjEyNi00Ny42MTEtMjYuNTAzLTYzLjk3NXpNNTE5Ljg4OSAxNzcuNDgzdjM3MS4yNTVIODc0LjQ0VjE3Ny40ODNINTE5Ljg4OXoiIHAtaWQ9IjU1MDYiIGZpbGw9IiMyYzJjMmMiPjwvcGF0aD48L3N2Zz4=";

    const QH_SMG_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwODExMDQ5NzkzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjkyNzMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYwMS4xMTkxMDUgODg5LjcwNzQzNGwtNTYuMDE5MTg1IDY0LjQ2MDQzMi0yMS41ODkxMjktMzUuMjk5NzZjLTYuMjkyNTY2LTkuMjA4NjMzLTEwLjQ4NzYxLTIxLjQ4NjgxMS0xMS4zNTczMTQtMzUuMjQ4NjAyLTAuNDA5MjczLTYuMTM5MDg5IDAuMjU1Nzk1LTEzLjc2MTc5MSAwLjg2OTcwNC0yMS40ODY4MWwxNC41MjkxNzctMjMxLjY0ODI4MmMyLjA0NjM2My0yMS40ODY4MTEgNi41OTk1Mi0zOC4zNjkzMDUgMTYuMDEyNzktNTAuNTk2MzIybDM4Ljg4MDg5NS00OS4xMTI3MSAzOC42NzYyNTkgNTMuNjY1ODY3LTIwLjAwMzE5NyAzMDUuMjY2MTg3eiBtMjkuNzIzNDIxLTQ1Mi41MDE5OThsLTQ3LjQyNDQ2IDU2LjczNTQxMS0yMi41MDk5OTItMzIuMTc5MDU2Yy0xMC4wMjcxNzgtMTMuNzYxNzkxLTE2LjgzMTMzNS0zMi4yMzAyMTYtMTcuNzUyMTk5LTQ1Ljk5MjAwNy0wLjQ2MDQzMi03LjY3Mzg2MSAwLjA1MTE1OS0xNi44ODI0OTQgMC40NjA0MzItMjcuNjI1ODk5bDEzLjc2MTc5MS0yMDguNjI2Njk5YzEuNTM0NzcyLTI5LjE2MDY3MSA2LjM5NDg4NC00MS4zODc2OSAyMi4wNDk1Ni02Mi44NzQ1bDI4LjA4NjMzMS0zOS45MDQwNzcgNDIuODcxMzAzIDY1Ljk0NDA0NS0xOS41NDI3NjYgMjk0LjUyMjc4MnogbTIxMy45OTg0MDEgNDYzLjI5NjU2Mmw0NS41ODI3MzQgNzIuMTM0MjkzLTIzLjIyNjIxOSAyNy42MjU4OTljLTE1Ljc1Njk5NCAxOS45NTIwMzgtMjIuMzU2NTE1IDIzLjAyMTU4My01MS44NzUzIDIzLjAyMTU4M2gtMTg5LjY5Nzg0MWMtMjguMzkzMjg1IDAtNDAuMDU3NTU0LTQuNjA0MzE3LTUxLjQ2NjAyOC0yMy4wMjE1ODNsLTE3LjU5ODcyMS0yNi4wOTExMjcgNjEuMTM1MDkyLTczLjYxNzkwNiAyMjcuMTQ2MjgzLTAuMDUxMTU5eiBtMjkuOTc5MjE3LTQ0OS40ODM2MTNsNDEuNTQxMTY3IDYyLjkyNTY2LTUwLjY0NzQ4MiA1OS44MDQ5NTZoLTIyNi4wMjA3ODNsLTQyLjUxMzE5LTU5Ljg1NjExNSA1MC40NDI4NDYtNjIuOTI1NjYgMjI3LjE5NzQ0MiAwLjA1MTE1OXogbS0yMDcuNTUyMzU4LTMyOC4yMzY2MWwtNDUuMDcxMTQzLTY0LjQ2MDQzMiAyMi44NjgxMDUtMzIuMjMwMjE2YzEzLjUwNTk5NS0xOS45NTIwMzggMjMuMzI4NTM3LTI2LjA5MTEyNyA0Mi42MTU1MDgtMjYuMDkxMTI3aDIwNS41NTcxNTRjMTguMjEyNjMgMCAyOC44MDI1NTggNi4xMzkwODkgNDAuMzEzMzQ5IDI2LjA5MTEyN2wyMS4zMzMzMzQgMzAuNzQ2NjAzLTU5LjM0NDUyNSA2NS45NDQwNDVoLTIyOC4yNzE3ODJ6IG0yMTEuMDgyMzM0IDQ3MC44NjgxMDVsNTAuNTQ1MTY0LTYxLjMzOTcyOCAyNS4wMTY3ODYgMzUuMjQ4NjAxYzcuNTIwMzg0IDEwLjc0MzQwNSAxMS44MTc3NDYgMjQuNTA1MTk2IDEyLjc4OTc2OSAzOS45MDQwNzcgMC42MTM5MDkgOS4xNTc0NzQgMC4wNTExNTkgMTguNDE3MjY2LTAuNDA5MjczIDI5LjE2MDY3MWwtMTQuODM2MTMxIDIyNi45OTI4MDZjLTAuMzU4MTE0IDEyLjI3ODE3Ny0yLjA0NjM2MyAyMS40ODY4MTEtMi44NjQ5MDggMjYuMDkxMTI3LTEuNjg4MjQ5IDkuMjA4NjMzLTUuNjc4NjU3IDE2Ljg4MjQ5NC0xNy4yOTE3NjcgMzAuNjk1NDQ0bC0yOC4zOTMyODUgMzUuMjk5NzYtNDMuOTk2ODAzLTY1Ljk5NTIwNCAxOS40NDA0NDgtMjk2LjA1NzU1NHogbTI5Ljc3NDU4LTQ1Mi41MDE5OThsNTguMjE5MDI1LTY1Ljk0NDA0NSAxOC44Nzc2OTggMjkuMTYwNjcxYzcuNjIyNzAyIDEyLjI3ODE3NyAxMS44MTc3NDYgMjQuNTU2MzU1IDEyLjU4NTEzMiAzNi43ODMzNzQgMC40NjA0MzIgNy42NzM4NjEtMC4xNTM0NzcgMTUuMzQ3NzIyLTAuNjY1MDY4IDI0LjU1NjM1NWwtMTMuODY0MTA5IDIyMy45MjMyNjFjLTMuMTcxODYzIDM4LjM2OTMwNS04LjkwMTY3OSA1NS4yNTE3OTktMjQuNzYwOTkxIDczLjY2OTA2NWwtMjcuMzE4OTQ1IDMzLjcxMzgyOS00Mi41MTMxODktNTkuODU2MTE1IDE5LjQ0MDQ0Ny0yOTYuMDA2Mzk1ek0xMTcuNjY1ODY3IDg5MC40MjM2NjFsLTU2LjAxOTE4NCA2NC40NjA0MzItMjEuNTg5MTI5LTM1LjI5OTc2Yy02LjI5MjU2Ni05LjIwODYzMy0xMC40ODc2MS0yMS40ODY4MTEtMTEuMzU3MzE0LTM1LjI0ODYwMi0wLjQwOTI3My02LjEzOTA4OSAwLjI1NTc5NS0xMy43NjE3OTEgMC44Njk3MDQtMjEuNDg2ODFsMTQuNTI5MTc3LTIzMS42NDgyODJjMi4wNDYzNjMtMjEuNDg2ODExIDYuNTk5NTItMzguMzY5MzA1IDE2LjAxMjc4OS01MC41OTYzMjJsMzguODgwODk2LTQ5LjExMjcxIDM4LjY3NjI1OSA1My42NjU4NjctMjAuMDAzMTk4IDMwNS4yNjYxODd6IG0yOS43MjM0MjItNDUyLjUwMTk5OGwtNDcuNDI0NDYxIDU2LjczNTQxMS0yMi41MDk5OTItMzIuMTc5MDU2Yy0xMC4wMjcxNzgtMTMuNzYxNzkxLTE2LjgzMTMzNS0zMi4yMzAyMTYtMTcuNzUyMTk4LTQ1Ljk5MjAwNy0wLjQ2MDQzMi03LjY3Mzg2MSAwLjA1MTE1OS0xNi44ODI0OTQgMC40NjA0MzItMjcuNjI1ODk5bDEzLjc2MTc5LTIwOC42MjY2OTljMS41MzQ3NzItMjkuMTYwNjcxIDYuMzk0ODg0LTQxLjM4NzY5IDIyLjA0OTU2LTYyLjg3NDVsMjguMDg2MzMxLTM5LjkwNDA3NyA0Mi44NzEzMDMgNjUuOTQ0MDQ1LTE5LjU0Mjc2NSAyOTQuNTIyNzgyeiBtMjEzLjk5ODQwMSA0NjMuMjk2NTYybDQ1LjU4MjczNCA3Mi4xMzQyOTMtMjMuMjI2MjE5IDI3LjYyNTg5OWMtMTUuNzU2OTk0IDE5Ljk1MjAzOC0yMi4zNTY1MTUgMjMuMDIxNTgzLTUxLjg3NTMgMjMuMDIxNTgzSDE0Mi4yMjIyMjJjLTI4LjM5MzI4NSAwLTQwLjA1NzU1NC00LjYwNDMxNy01MS40NjYwMjctMjMuMDIxNTgzbC0xNy41OTg3MjEtMjYuMDkxMTI3IDYxLjEzNTA5Mi03My42MTc5MDZoMjI3LjA5NTEyNHogbTI5Ljk3OTIxNi00NDkuNDgzNjEzbDQxLjU0MTE2OCA2Mi45MjU2Ni01MC42NDc0ODIgNTkuODA0OTU2SDE1Ni4yMzk4MDhsLTQyLjUxMzE4OS01OS44NTYxMTUgNTAuNDQyODQ1LTYyLjkyNTY2IDIyNy4xOTc0NDIgMC4wNTExNTl6TTE4My44MTQ1NDggMTIzLjQ5ODAwMmwtNDUuMDcxMTQzLTY0LjQ2MDQzMiAyMi44NjgxMDYtMzIuMjMwMjE2YzEzLjUwNTk5NS0xOS45NTIwMzggMjMuMzI4NTM3LTI2LjA5MTEyNyA0Mi42MTU1MDctMjYuMDkxMTI3aDIwNS41NTcxNTVjMTguMjEyNjMgMCAyOC44MDI1NTggNi4xMzkwODkgNDAuMzEzMzQ5IDI2LjA5MTEyN2wyMS4zMzMzMzMgMzAuNzQ2NjAzLTU5LjM0NDUyNCA2NS45NDQwNDVIMTgzLjgxNDU0OHogbTIxMS4wODIzMzQgNDcwLjg2ODEwNWw1MC41NDUxNjQtNjEuMzM5NzI4IDI1LjAxNjc4NyAzNS4yNDg2MDFjNy41MjAzODQgMTAuNzQzNDA1IDExLjgxNzc0NiAyNC41MDUxOTYgMTIuNzg5NzY4IDM5LjkwNDA3NyAwLjYxMzkwOSA5LjE1NzQ3NCAwLjA1MTE1OSAxOC40MTcyNjYtMC40MDkyNzIgMjkuMTYwNjcxbC0xNC44MzYxMzIgMjI2Ljk5MjgwNmMtMC4zNTgxMTQgMTIuMjc4MTc3LTIuMDQ2MzYzIDIxLjQ4NjgxMS0yLjg2NDkwOCAyNi4wOTExMjctMS42ODgyNDkgOS4yMDg2MzMtNS42Nzg2NTcgMTYuODgyNDk0LTE3LjI5MTc2NiAzMC42OTU0NDRsLTI4LjM5MzI4NiAzNS4yOTk3Ni00My45OTY4MDItNjUuOTk1MjA0IDE5LjQ0MDQ0Ny0yOTYuMDU3NTU0eiBtMjkuNzc0NTgxLTQ1Mi41MDE5OThsNTguMjE5MDI1LTY1Ljk0NDA0NSAxOC44Nzc2OTcgMjkuMTYwNjcxYzcuNjIyNzAyIDEyLjI3ODE3NyAxMS44MTc3NDYgMjQuNTU2MzU1IDEyLjU4NTEzMiAzNi43ODMzNzQgMC40NjA0MzIgNy42NzM4NjEtMC4xNTM0NzcgMTUuMzQ3NzIyLTAuNjY1MDY4IDI0LjU1NjM1NWwtMTMuODY0MTA4IDIyMy45MjMyNjFjLTMuMTcxODYzIDM4LjM2OTMwNS04LjkwMTY3OSA1NS4yNTE3OTktMjQuNzYwOTkyIDczLjY2OTA2NWwtMjcuMzE4OTQ0IDMzLjcxMzgyOS00Mi41MTMxOS01OS44NTYxMTUgMTkuNDQwNDQ4LTI5Ni4wMDYzOTV6IiBwLWlkPSI5Mjc0IiBmaWxsPSIjMmMyYzJjIj48L3BhdGg+PC9zdmc+";

    const QH_SDISPLAY_ICO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAASUlEQVRIiWNgGOqAEUr/p5X5TDQyGA5Y0G2kkrnwEKG5D0YtGLVg1ILhYAF6WUT1UpXmPiCl9ET3HVF6B4UPCMULXjNo7oOhDwDJtgUpa+NbrAAAAABJRU5ErkJggg==";

    const QH_LCD_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwODExMzYwNjQyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEyNDYgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEyMjUxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjU4LjQwNjI1IiBoZWlnaHQ9IjQ4Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0xMTQyLjczOTQ3OCA4MTkuMkgxMDMuODY5MjE3QzQ2LjUyNTIxNyA4MTkuMiAwIDc3My4zNDI2MDkgMCA3MTYuOFYxMDIuNEMwIDQ1Ljg1NzM5MSA0Ni41MjUyMTcgMCAxMDMuODY5MjE3IDBoMTAzOC44NzAyNjFDMTIwMC4wODM0NzggMCAxMjQ2LjYwODY5NiA0NS44NTczOTEgMTI0Ni42MDg2OTYgMTAyLjR2NjE0LjRjMCA1Ni41NDI2MDktNDYuNTI1MjE3IDEwMi40LTEwMy44NjkyMTggMTAyLjR6TTI2MS4wNzU0NzggNTQ2LjE0ODE3NGgxOTEuOTMzMjE4VjUwMC44Njk1NjVIMzE2LjE0ODg3VjI3OS41OTY1MjJIMjYxLjA3NTQ3OHYyNjYuNTUxNjUyeiBtNDA1LjYzNzU2NS05OC44MzgyNjFjLTQuNTg1NzM5IDE5LjY3ODYwOS0xMi4xMDk5MTMgMzQuMTAzNjUyLTIyLjcwNjA4NiA0My4yNzUxM2E1NS42NTIxNzQgNTUuNjUyMTc0IDAgMCAxLTM3LjcwOTkxNCAxMy43NTcyMThjLTE5Ljg1NjY5NiAwLTM1Ljk3MzU2NS03LjIxMjUyMi00OC4zNTA2MDgtMjEuNjM3NTY1LTEyLjQyMTU2NS0xNC40MjUwNDMtMTguNjEwMDg3LTM4LjY0NDg3LTE4LjYxMDA4Ny03Mi41NzA0MzUgMC0zMi4wNTU2NTIgNi4yNzc1NjUtNTUuMjA2OTU3IDE4Ljg3NzIxNy02OS40OTg0MzUgMTIuNTk5NjUyLTE0LjMzNiAyOC45MzkxMy0yMS40NTk0NzggNDkuMTk2NTIyLTIxLjQ1OTQ3OCAxNC42MDMxMyAwIDI3LjA2OTIxNyA0LjAwNjk1NyAzNy4yNjQ2OTYgMTIuMTA5OTEzIDEwLjI0IDguMDEzOTEzIDE2Ljk2Mjc4MyAxOS4wNTUzMDQgMjAuMjEyODY5IDMyLjk0NjA4N2w1NC40OTQ2MDktMTIuNzc3NzM5Yy02LjIzMzA0My0yMS41NDg1MjItMTUuNDkzNTY1LTM4LjAyMTU2NS0yNy45MTUxMzEtNDkuNTA4MTc0LTIwLjgzNjE3NC0xOS40NTYtNDcuOTA1MzkxLTI5LjE2MTczOS04MS4yOTY2OTUtMjkuMTYxNzM5LTM4LjE1NTEzIDAtNjkuMDA4Njk2IDEyLjM3NzA0My05Mi40MjcxMzEgMzcuMTMxMTMtMjMuNDE4NDM1IDI0Ljc1NDA4Ny0zNS4xNzIxNzQgNTkuNDgxMDQzLTM1LjE3MjE3NCAxMDQuMTgwODcgMCA0Mi4yOTU2NTIgMTEuNjY0Njk2IDc1LjY4Njk1NyAzNC45OTQwODcgMTAwLjA0MDM0NyAyMy4zMjkzOTEgMjQuMzk3OTEzIDUzLjA2OTkxMyAzNi41OTY4NyA4OS4yNjYwODcgMzYuNTk2ODcgMjkuMjk1MzA0IDAgNTMuNDI2MDg3LTcuMTIzNDc4IDcyLjQzNjg3LTIxLjM3MDQzNSAxOS4wNTUzMDQtMTQuMjQ2OTU3IDMyLjY3ODk1Ny0zNi4wNjI2MDkgNDAuODI2NDM1LTY1LjM1NzkxM2wtNTMuMzgxNTY2LTE2LjY5NTY1MnogbTEwMC40NDEwNDQtMTY5LjkzOTQ3OHYyNjguNzc3NzM5aDEwMy42MDIwODdjMjAuMzQ2NDM1IDAgMzYuNTk2ODctMS45MTQ0MzUgNDguNzUxMzA0LTUuNjk4NzgzIDE2LjI1MDQzNS01LjEyIDI5LjExNzIxNy0xMi4yODggMzguNjg5MzkyLTIxLjQ1OTQ3OCAxMi42NDQxNzQtMTIuMTA5OTEzIDIyLjM0OTkxMy0yNy45MTUxMyAyOS4xNjE3MzktNDcuNDYwMTc0IDUuNjA5NzM5LTE2LjAyNzgyNiA4LjM3MDA4Ny0zNS4wODMxMyA4LjM3MDA4Ny01Ny4yMTA0MzUgMC0yNS4xOTkzMDQtMi45Mzg0MzUtNDYuMzQ3MTMtOC45MDQzNDgtNjMuNTMyNTIxYTExNy4wOTIxNzQgMTE3LjA5MjE3NCAwIDAgMC0yNi4wNDUyMTgtNDMuNTQyMjYxIDkxLjQwMzEzIDkxLjQwMzEzIDAgMCAwLTQxLjA5MzU2NS0yNC43NTQwODdDOTA3Ljc5ODI2MSAyNzkuMDYyMjYxIDg5MC40MzQ3ODMgMjc3LjM3MDQzNSA4NjcuNzI4Njk2IDI3Ny4zNzA0MzVoLTEwMC42MTkxMzF6IG01NS4wNzMzOTEgNDUuNDU2Njk1aDI0LjcwOTU2NWMyMi40ODM0NzggMCAzNy41MzE4MjYgMC44OTA0MzUgNDUuMjM0MDg3IDIuNTgyMjYxIDEwLjI0IDIuMjI2MDg3IDE4Ljc4ODE3NCA2LjQxMTEzIDI1LjQ2NjQzNSAxMi42NDQxNzQgNi42NzgyNjEgNi4yMzMwNDMgMTEuODg3MzA0IDE0LjkxNDc4MyAxNS41ODI2MDkgMjYuMDQ1MjE4IDMuNzM5ODI2IDExLjEzMDQzNSA1LjYwOTczOSAyNy4wNjkyMTcgNS42MDk3MzkgNDcuODE2MzQ3IDAgMjAuNzkxNjUyLTEuODY5OTEzIDM3LjIyMDE3NC01LjU2NTIxNyA0OS4yNDEwNDQtMy43Mzk4MjYgMTIuMDIwODctOC41NDgxNzQgMjAuNzAyNjA5LTE0LjQyNTA0NCAyNS45NTYxNzRhNTEuMDY2NDM1IDUxLjA2NjQzNSAwIDAgMS0yMi4yNjA4NjkgMTEuMTMwNDM1Yy02Ljc2NzMwNCAxLjc4MDg3LTE3Ljg5NzczOSAyLjYyNjc4My0zMy4yNTc3NCAyLjYyNjc4MmgtNDEuMDkzNTY1VjMyMi43ODI2MDl6TTM1LjYxNzM5MSA5MzQuOTU2NTIyaDExNzUuMzczOTEzYTM1LjYxNzM5MSAzNS42MTczOTEgMCAwIDEgMzUuNjE3MzkyIDM1LjYxNzM5MXYxNy44MDg2OTZhMzUuNjE3MzkxIDM1LjYxNzM5MSAwIDAgMS0zNS42MTczOTIgMzUuNjE3MzkxSDM1LjYxNzM5MWEzNS42MTczOTEgMzUuNjE3MzkxIDAgMCAxLTM1LjYxNzM5MS0zNS42MTczOTF2LTE3LjgwODY5NmEzNS42MTczOTEgMzUuNjE3MzkxIDAgMCAxIDM1LjYxNzM5MS0zNS42MTczOTF6IiBmaWxsPSIjMmMyYzJjIiBwLWlkPSIxMjI1MiI+PC9wYXRoPjwvc3ZnPg==";

      const QH_ZKP_ICO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD70lEQVRoge2ZW0tVQRTHf2pl0eUhykJK6iW7ED5ISan5rNkN6iVIIgqikqCX/AAV9FSZSvRQ+BHKeuhCRRLVQ1ZUBNKL3Uk60c0LqKeHvUb3mT0z5+x99jGL84dhzp611n/WzKxZM6OQx9TFHSD5j5Vu5XyBbyDJeOZj0lEAMM0m+AeQMvGFf8uLuJEfyFSDaY9kgzlAiZQFwMI03z1ATcw+jKe0qLhJtBQai7+m9Bs1ayn7D0A/8FnqPdJ+APgibV+ANzH1F7CPdYayaI/UX36zO2Cb5ZzeHPIr4oC++WybMtYVyq+IA+9JTb8K+0lNvzlDtunwBuEOwil7IEL4K8oToDZiXzk7ECcb/+eBGHYgtnd9t8toMjjD7hFX6GV7+QvLmeJv1PSbiz9aZMUZJrTW+H4PAl+Bx2E7dOCxcA762lZHIbJlrWKgDRjFfhbkqowCreJDpv4aBcXAbWkfBM4C64HZUqqAc8BQFs5mwnsDmBF2IIp8M95KJIG3wFqTkaACeCe6Zxx6Cqcj8LYCu4FhzdcAurWBtOAt7aChs+9S9E6HxGalw7kVwIiF9wHBtKt4R4AT2kDuKyX/Zq/FyxwFwCxgicgvAC808kKCieI5cFHaDzoGcggosvCOEZxlxVsEzMMLd+XnJkc/43gtpOsMskopOqrE5qWD96WD1wbF+yqEzTgGxHiOfH8HfpI6gEppU2E2V2x+OXh/abymcNLbFe9vG6nrHBmSusiho2O61JkcaErXFE56u/JhOIQv43gkRNUGmS20qsVGj30/XonOhhC+1IjNQ5uCa0WuSL3LILsnRcdeqW85eG9qun7Ywmyn1FdtpK6B9EpdZpCNSfFjI9CElyY7HLwdeCl6L8FVsYWZ8qHXIEuLZiFtz0C3Gu+NngROZqB/SnQ/YQ5dHe2i32xTcK1IqdSf0nRSB9wFFsl3A7DVob8NqJffi8W2Lk0fyodSp5YFnXizsM+hUwg8I3h/GhOHdexgInz85RnuSd0nep2hRiC4Jcb1Dp0mnzPH8S58LfLdY9B/atFNCpcN9aLjSiJWqDRZYZHPBPp8jqgDbi7BGdeLSbdPOE2oIM2NwbWc86XWL4cKR0jNaM3ioHVDptEtE04TfkhtepekhZrtcoOsBEiIvI1g3I9iDskGgg+0MeC8/E4It45ysrhrdYnxMa19GnBdZOpw24q3Jwbw/ujW6OBt9On2AFukXf3r7hrBa9FRkVkPRBe2M/E2acabqVVMDDCBd9WPC0uBb8LdhfemKQEOM3GB3R6VvAPzZu3He5rGjSrhNvWZycHsxC68QysBfAQuAcuyJXVgOXBZ+kpI3zudFnlMQfwBDXzGA8qBsJsAAAAASUVORK5CYII=";

    const QH_OLED_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwODExMTM1MTA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwMTYyIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0wIDBoMTAyNHY4MjMuODU0NTQ1SDBWMHogbTkzLjA5MDkwOSA5My4wOTA5MDl2NjI4LjM2MzYzNmg4MzcuODE4MTgyVjkzLjA5MDkwOUg5My4wOTA5MDl6TTk3Ny40NTQ1NDUgMTAyNEg0Ni41NDU0NTV2LTkzLjA5MDkwOWg5MzAuOTA5MDl2OTMuMDkwOTA5eiIgcC1pZD0iMTAxNjMiIGZpbGw9IiMyYzJjMmMiPjwvcGF0aD48cGF0aCBkPSJNMTE2LjM2MzYzNiAyMzIuNzI3MjczdjQxOC45MDkwOTFoMTg2LjE4MTgxOVYyMzIuNzI3MjczaC0xODYuMTgxODE5eiBtMTM5LjYzNjM2NCAzNzIuMzYzNjM2aC05My4wOTA5MDlWMjc5LjI3MjcyN2g5My4wOTA5MDl2MzI1LjgxODE4MnpNMzQ5LjA5MDkwOSAyMzIuNzI3MjczaDQ2LjU0NTQ1NXYzNzIuMzYzNjM2aDkzLjA5MDkwOXY0Ni41NDU0NTVoLTEzOS42MzYzNjRWMjMyLjcyNzI3M3pNNzIxLjQ1NDU0NSAyMzIuNzI3MjczaDEyNS42NzI3MjhsNjAuNTA5MDkxIDYwLjUwOTA5MXYyOTcuODkwOTA5TDg0Ny4xMjcyNzMgNjUxLjYzNjM2NGgtMTI1LjY3MjcyOFYyMzIuNzI3MjczeiBtNDYuNTQ1NDU1IDQ2LjU0NTQ1NHYzMjUuODE4MTgyaDYwLjUwOTA5MWwzMi41ODE4MTgtMzIuNTgxODE4VjMxMS44NTQ1NDVsLTMyLjU4MTgxOC0zMi41ODE4MThoLTYwLjUwOTA5MXpNNjk4LjE4MTgxOCAyNzkuMjcyNzI3VjIzMi43MjcyNzNoLTE4Ni4xODE4MTh2NDE4LjkwOTA5MWgxODYuMTgxODE4di00Ni41NDU0NTVoLTEzOS42MzYzNjN2LTEzOS42MzYzNjRoMTM5LjYzNjM2M1Y0MTguOTA5MDkxaC0xMzkuNjM2MzYzVjI3OS4yNzI3Mjd6IiBwLWlkPSIxMDE2NCIgZmlsbD0iIzJjMmMyYyI+PC9wYXRoPjwvc3ZnPg==";

    const QH_OTHER_ICO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIwODExMTk4MDE0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExMDQ3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik01MDguMTYgOTA5LjkyNjRjLTUzLjgxMTIgMC0xMDYuMDM1Mi0xMC41NDcyLTE1NS4xODcyLTMxLjMzNDQtNDcuNDYyNC0yMC4wNzA0LTkwLjExMi00OC44NDQ4LTEyNi43Mi04NS40MDE2YTM5Ny4yMjQ5NiAzOTcuMjI0OTYgMCAwIDEtODUuNDAxNi0xMjYuNzJjLTIwLjc4NzItNDkuMTUyLTMxLjMzNDQtMTAxLjM3Ni0zMS4zMzQ0LTE1NS4xODcyczEwLjU0NzItMTA2LjAzNTIgMzEuMzM0NC0xNTUuMTg3MmMyMC4wNzA0LTQ3LjQ2MjQgNDguNzkzNi05MC4xMTIgODUuNDAxNi0xMjYuNzJzNzkuMjA2NC02NS4zMzEyIDEyNi43Mi04NS40MDE2YzQ5LjE1Mi0yMC43ODcyIDEwMS4zNzYtMzEuMzM0NCAxNTUuMTg3Mi0zMS4zMzQ0czEwNi4wMzUyIDEwLjU0NzIgMTU1LjE4NzIgMzEuMzM0NGM0Ny40NjI0IDIwLjA3MDQgOTAuMTEyIDQ4Ljc5MzYgMTI2LjcyIDg1LjQwMTYgMzYuNjA4IDM2LjYwOCA2NS4zMzEyIDc5LjIwNjQgODUuNDAxNiAxMjYuNzIgMjAuNzg3MiA0OS4xNTIgMzEuMzM0NCAxMDEuMzc2IDMxLjMzNDQgMTU1LjE4NzJzLTEwLjU0NzIgMTA2LjAzNTItMzEuMzM0NCAxNTUuMTg3MmMtMjAuMDcwNCA0Ny40NjI0LTQ4Ljg0NDggOTAuMTEyLTg1LjQwMTYgMTI2LjcyYTM5Ny4yMjQ5NiAzOTcuMjI0OTYgMCAwIDEtMTI2LjcyIDg1LjQwMTZjLTQ5LjE1MiAyMC43ODcyLTEwMS4zNzYgMzEuMzM0NC0xNTUuMTg3MiAzMS4zMzQ0eiBtMC03NTAuMzg3MmMtOTMuOTUyIDAtMTgyLjI3MiAzNi42MDgtMjQ4LjcyOTYgMTAzLjAxNDRDMTkzLjAyNCAzMjguOTYgMTU2LjQxNiA0MTcuMzMxMiAxNTYuNDE2IDUxMS4yODMyYzAgOTMuOTUyIDM2LjYwOCAxODIuMjcyIDEwMy4wMTQ0IDI0OC43Mjk2IDY2LjQ1NzYgNjYuNDU3NiAxNTQuNzc3NiAxMDMuMDE0NCAyNDguNzI5NiAxMDMuMDE0NCA5My45NTIgMCAxODIuMjcyLTM2LjYwOCAyNDguNzI5Ni0xMDMuMDE0NHMxMDMuMDE0NC0xNTQuNzc3NiAxMDMuMDE0NC0yNDguNzI5NmMwLTkzLjk1Mi0zNi42MDgtMTgyLjI3Mi0xMDMuMDE0NC0yNDguNzI5Ni02Ni40MDY0LTY2LjQ1NzYtMTU0Ljc3NzYtMTAzLjAxNDQtMjQ4LjcyOTYtMTAzLjAxNDR6IiBmaWxsPSIjMmMyYzJjIiBwLWlkPSIxMTA0OCI+PC9wYXRoPjxwYXRoIGQ9Ik0yOTkuNzI0OCA1MTEuMjgzMm0tNTIuMDcwNCAwYTUyLjA3MDQgNTIuMDcwNCAwIDEgMCAxMDQuMTQwOCAwIDUyLjA3MDQgNTIuMDcwNCAwIDEgMC0xMDQuMTQwOCAwWiIgZmlsbD0iIzJjMmMyYyIgcC1pZD0iMTEwNDkiPjwvcGF0aD48cGF0aCBkPSJNNTA4LjE2IDUxMS4yODMybS01Mi4wNzA0IDBhNTIuMDcwNCA1Mi4wNzA0IDAgMSAwIDEwNC4xNDA4IDAgNTIuMDcwNCA1Mi4wNzA0IDAgMSAwLTEwNC4xNDA4IDBaIiBmaWxsPSIjMmMyYzJjIiBwLWlkPSIxMTA1MCI+PC9wYXRoPjxwYXRoIGQ9Ik03MTYuNjQ2NCA1MTEuMjgzMm0tNTIuMDcwNCAwYTUyLjA3MDQgNTIuMDcwNCAwIDEgMCAxMDQuMTQwOCAwIDUyLjA3MDQgNTIuMDcwNCAwIDEgMC0xMDQuMTQwOCAwWiIgZmlsbD0iIzJjMmMyYyIgcC1pZD0iMTEwNTEiPjwvcGF0aD48L3N2Zz4=";

    return `
<category name="%{BKY_QH_SENSOR_CATEGORY}" id="QH_SENSOR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_Sensor_ICO}">
    <label text="%{BKY_QH_BUTTON_LABEL}"></label>
    <block type="QH_button_general" id="QH_button_general"></block>
    <block type="QH_button_both" id="QH_button_both"></block>
    <block type="QH_buttonfuction_init" id="QH_buttonfuction_init"></block>
    <block type="QH_buttonfuction_do" id="QH_buttonfuction_do"></block>
    <label text="%{BKY_QH_SENSOR_LABEL}"></label>
    <block type="QH_UltraSonicDistanceSensor" id="QH_UltraSonicDistanceSensor"></block>
    <block type="QH_Line_follower" id="QH_Line_follower"></block>
    <block type="QH_lightSensor" id="QH_lightSensor"></block>
    <block type="QH_sound" id="QH_sound"></block>
    <block type="QH_Potentiometer" id="QH_Potentiometer"></block>
    <block type="QH_joystick_initialization" id="QH_joystick_initialization"></block>
    <block type="QH_get_the_joystick_value" id="QH_get_the_joystick_value"></block>
    <block type="QH_Soilmoisture" id="QH_Soilmoisture"></block>
    <block type="QH_dht11" id="QH_dht11"></block>
    <label text="%{BKY_QH_COLOR_LABEL}"></label>
    <block type="QH_yssb_init">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0x29</field>
            </shadow>
        </value>
    </block>
    <block type="QH_yssb_get" id="QH_yssb_get"></block>
    <block type="QH_yssb_compare">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_MPU6050_LABEL}"></label>
    <block type="QH_MPU6050_update" id="QH_MPU6050_update"></block>
    <block type="QH_MPU6050_yaw_reset" id="QH_MPU6050_yaw_reset"></block>
    <block type="QH_MPU6050_GETDATA" id="QH_MPU6050_GETDATA"></block>
    <block type="QH_MPU6050_MOTION_update" id="QH_MPU6050_MOTION_update"></block>
    <block type="QH_MPU6050_MOTION_GETDATA" id="QH_MPU6050_MOTION_GETDATA"></block>
</category>
<category name="%{BKY_QH_ACTUATOR_CATEGORY}" id="QH_ACTUATOR_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_Actuator_ICO}">
    <label text="LED"></label>
    <block type="QH_inout_highlow" id="QH_inout_highlow"></block>
    <block type="QH_ledlight">
        <value name="STATE">
            <shadow type="QH_inout_highlow">
            </shadow>
        </value>
    </block>
    <block type="QH_read_ledlight"></block>
    <block type="QH_ledlight_PWM">
        <value name="ledn">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_RELAY_LABEL}"></label>
    <block type="QH_relay">
        <value name="STATE">
            <shadow type="QH_inout_highlow">
            </shadow>
        </value>
    </block>
    <block type="QH_read_relay"></block>
    <label text="RGB"></label>
    <block type="QH_rgb_led">
        <value name="num8">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="R">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="G">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="B">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_BUZZER_LABEL}"></label>
    <block type="QH_buzzer">
        <value name="DURATION">
            <shadow type="math_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
    <block type="QH_buzzer_music"></block>
    <label text="%{BKY_QH_DCMOTO_LABEL}"></label>
    <block type="QH_motor">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_code_motor">
        <value name="speed1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="speed2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="speed3">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="speed4">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_code_motor_read"></block>
    <label text="%{BKY_QH_SERVO_LABEL}"></label>
    <block type="QH_servomotor360">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotor180">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">150</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotorread"></block>
    <block type="QH_servomotorPWM_set180">
        <value name="param1">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="param2">
            <shadow type="math_number">
                <field name="NUM">460</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotorPWM">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotorPWM_set360">
        <value name="S_param">
            <shadow type="math_number">
                <field name="NUM">270</field>
            </shadow>
        </value>
        <value name="CW_L_param">
            <shadow type="math_number">
                <field name="NUM">230</field>
            </shadow>
        </value>
        <value name="CW_H_param">
            <shadow type="math_number">
                <field name="NUM">80</field>
            </shadow>
        </value>
        <value name="CCW_L_param">
            <shadow type="math_number">
                <field name="NUM">300</field>
            </shadow>
        </value>
        <value name="CCW_H_param">
            <shadow type="math_number">
                <field name="NUM">450</field>
            </shadow>
        </value>
    </block>
    <block type="QH_servomotorPWM360">
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
</category>
<category name="%{BKY_QH_SPEECH_CATEGORY}" id="QH_SPEECH_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_SPEECH_ICO}">
    <block type="QH_Voice">
        <value name="delayTime">
            <shadow type="math_number">
                <field name="NUM">500</field>
            </shadow>
        </value>
    </block>
    <block type="QH_VoicePlayValue">
        <value name="addr">
            <shadow type="math_number">
                <field name="NUM">5.0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_ASR_SendData"></block>
    <block type="QH_ASR_ReceiveData"></block>
    <block type="QH_ASR_CompareData"></block>
    <label text="%{BKY_QH_SYNTHESIS_LABEL}"></label>
    <block type="QH_QF_hc">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">中/E/拼/不支持变量</field>
            </shadow>
        </value>
    </block>
    <block type="QH_QF_hc_en">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">English/变量</field>
            </shadow>
        </value>
    </block>
    <block type="QH_QF_sound">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">01</field>
            </shadow>
        </value>
    </block>
    <block type="QH_QF_stophc"></block>
    <label text="%{BKY_QH_RECOGNITION_LABEL}"></label>
    <block type="QH_QF_startstopsb"></block>
    <block type="QH_QF_sbjg">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">yes ok</field>
            </shadow>
        </value>
    </block>
    <block type="QH_QF_sbjg2"></block>
</category>
<category name="%{BKY_QH_COMMUNICATE_CATEGORY}" id="QH_COMMUNICATE_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_COMMUNICATE_ICO}">
    <label text="%{BKY_QH_IR_LABEL}"></label>
    <block type="QH_ir_re2"></block>
    <block type="QH_ir_send_nec">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">0xCF</field>
            </shadow>
        </value>
        <value name="bits">
            <shadow type="math_number">
                <field name="NUM">32</field>
            </shadow>
        </value>
    </block>
    <block type="QH_ir_send_raw">     
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">0,0,0</field>
        </shadow>
      </value>
      <value name="length">
        <shadow type="math_number">
          <field name="NUM">3</field>
        </shadow>
      </value>
      <value name="freq">
        <shadow type="math_number">
          <field name="NUM">38</field>
        </shadow>
      </value>
    </block>
    <label text="%{BKY_QH_BLUETOOTH_LABEL}"></label>
    <block type="QH_BT_START"></block>
    <block type="QH_BT_button">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">U</field>
            </shadow>
        </value>
    </block>  
    <block type="QH_BT_variable"></block> 
    <block type="QH_BT_print">
        <value name="N1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N3">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N4">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="N5">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block> 
    <label text="%{BKY_QH_SERIAL_LABEL}"></label>  
    <block type="QH_serial_change"></block>
    <block type="QH_serial_jieshouzhi">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="QH_serial_fasong">
        <value name="text">
        <shadow type="text">
            <field name="TEXT">0x7E</field>
        </shadow>
        </value>
    </block>
    <block type="QH_serial_jieshou"></block>
    <block type="QH_serial_suju"></block>
</category>
<category name="%{BKY_QH_MP3_CATEGORY}" id="QH_MP3_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_MP3_ICO}">
    <block type="QH_MP3_bofangx">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="QH_MP3_yingliang">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
    </block>
    <block type="QH_MP3_loopplay">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="QH_MP3_startpause"></block>
    <block type="QH_MP3_previous_next"></block>
    <block type="QH_MP3_play">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">20</field>
            </shadow>
        </value>
    </block>
    <block type="QH_ESPuno_define_mp3_directory">
        <value name="data">
        <shadow type="text">
            <field name="TEXT">音频1.mp3 音频2.mp3 音频3.mp3</field>
        </shadow>
        </value>
    </block>
    <block type="QH_ESPuno_mp3_designated_play">
        <value name="num">
        <shadow type="math_number">
          <field name="NUM">20</field>
        </shadow>
        </value>  
        <value name="NAME">
        <shadow type="text">
          <field name="TEXT">歌曲1</field>
        </shadow>
        </value>
    </block>  
</category>
<category name="%{BKY_QH_SMG_CATEGORY}" id="QH_SMG_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_SMG_ICO}">
    <block type="QH_display">
        <value name="num">
            <shadow type="math_number">
                <field name="NUM">1234</field>
            </shadow>
        </value>
    </block>
    <block type="QH_displayoff"></block>
</category>
<category name="%{BKY_QH_OLED_CATEGORY}" id="QH_OLED_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_OLED_ICO}">
    <block type="tool_modulus_show">
        <value name="VAR">
            <shadow type="text">
              <field name="TEXT">bitmap</field>
            </shadow>
        </value> 
        <value name="input_data">
            <block type="tool_modulus">
                <field name="modulus_way">2</field>
                <field name="modulus_direction">2</field>
                <value name="hz_line_height">
                    <shadow type="text">
                      <field name="TEXT">16</field>
                    </shadow>
                </value>
                <value name="bitmap_width">
                    <shadow type="text">
                      <field name="TEXT">128</field>
                    </shadow>
                </value>
                <value name="bitmap_height">
                    <shadow type="text">
                      <field name="TEXT">64</field>
                    </shadow>
                </value>
                <value name="input_data">
                    <shadow type="text">
                      <field name="TEXT">齐护机器人</field>
                    </shadow>
                </value>        
            </block>
        </value>  
    </block>
    <block type="oled_init">
      <value name="NAME">
          <shadow type="text">
            <field name="TEXT">u8g2</field>
          </shadow>
        </value>
        <value name="ADDRESS">
          <shadow type="text">
            <field name="TEXT">0x3C</field>
          </shadow>
        </value>
      <next>
        <block type="oled_page">
          <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
          </value>
          <statement name="DO">
            <block type="oled_showBitmap" >
              <value name="NAME">
                <shadow type="text">
                  <field name="TEXT">u8g2</field>
                </shadow>
              </value>
              <value name="START_X">
                <shadow type="math_number">
                  <field name="NUM">0</field>
                </shadow>
              </value>
              <value name="START_Y">
                <shadow type="math_number">
                  <field name="NUM">0</field>
                </shadow>
              </value>
              <value name="WIDTH">
                <shadow type="math_number">
                  <field name="NUM">128</field>
                </shadow>
              </value>
              <value name="HEIGHT">
                <shadow type="math_number">
                  <field name="NUM">64</field>
                </shadow>
              </value>
              <value name="bitmap_name">
                <shadow type="text">
                  <field name="TEXT">bitmap</field>
                </shadow>
              </value>
            </block>    
          </statement>
        </block>
      </next>
    </block>
    <block type="oled_clear">
        <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
    </block>
    <block type="u8g2_setContrast">
        <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
        <value name="Contrast">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
    <block type="oled_face">
        <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
        <value name="POS_X">
          <shadow type="math_number">
            <field name="NUM">20</field>
          </shadow>
        </value>
        <value name="POS_Y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
    </block>
    <block type="oled_drawPixel" >
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="POS_X">
        <shadow type="math_number">
          <field name="NUM">64</field>
        </shadow>
      </value>
      <value name="POS_Y">
        <shadow type="math_number">
          <field name="NUM">32</field>
        </shadow>
      </value>
    </block>
    <block type="oled_drawLine">
        <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="START_X">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="START_Y">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="END_X">
        <shadow type="math_number">
          <field name="NUM">15</field>
        </shadow>
      </value>
      <value name="END_Y">
        <shadow type="math_number">
          <field name="NUM">20</field>
        </shadow>
      </value>
    </block>
    <block type="oled_draw_Str_Line">
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="START_X">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="START_Y">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="LENGTH">
        <shadow type="math_number">
          <field name="NUM">30</field>
        </shadow>
      </value>
    </block>
    <block type="oled_drawFrame">
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="D0_X">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="D0_Y">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="WIDTH">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
      <value name="HEIGHT">
        <shadow type="math_number">
          <field name="NUM">20</field>
        </shadow>
      </value>
    </block>
    <block type="oled_drawRFrame">
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="D0_X">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="D0_Y">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="WIDTH">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
      <value name="HEIGHT">
        <shadow type="math_number">
          <field name="NUM">20</field>
        </shadow>
      </value>
      <value name="RADIUS">
        <shadow type="math_number">
          <field name="NUM">3</field>
        </shadow>
      </value>
    </block>
    <block type="oled_drawCircle">
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="D0_X">
        <shadow type="math_number">
          <field name="NUM">30</field>
        </shadow>
      </value>
      <value name="D0_Y">
        <shadow type="math_number">
          <field name="NUM">30</field>
        </shadow>
      </value>
      <value name="RADIUS">
        <shadow type="math_number">
          <field name="NUM">6</field>
        </shadow>
      </value>
    </block>
    <block type="oled_drawEllipse">
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="D0_X">
        <shadow type="math_number">
          <field name="NUM">30</field>
        </shadow>
      </value>
      <value name="D0_Y">
        <shadow type="math_number">
          <field name="NUM">30</field>
        </shadow>
      </value>
      <value name="RADIUS_X">
        <shadow type="math_number">
          <field name="NUM">6</field>
        </shadow>
      </value>
      <value name="RADIUS_Y">
        <shadow type="math_number">
          <field name="NUM">15</field>
        </shadow>
      </value>
    </block>
    <block type="oled_drawTriangle" >
      <value name="NAME">
            <shadow type="text">
              <field name="TEXT">u8g2</field>
            </shadow>
        </value>
      <value name="D0_X">
        <shadow type="math_number">
          <field name="NUM">14</field>
        </shadow>
      </value>
      <value name="D0_Y">
        <shadow type="math_number">
          <field name="NUM">55</field>
        </shadow>
      </value>
      <value name="D1_X">
        <shadow type="math_number">
          <field name="NUM">45</field>
        </shadow>
      </value>
      <value name="D1_Y">
        <shadow type="math_number">
          <field name="NUM">33</field>
        </shadow>
      </value>
      <value name="D2_X">
        <shadow type="math_number">
          <field name="NUM">8</field>
        </shadow>
      </value>
      <value name="D2_Y">
        <shadow type="math_number">
          <field name="NUM">43</field>
        </shadow>
      </value>
    </block>
</category>
<category name="%{BKY_QH_SDISPLAY_CATEGORY}" id="QH_SDISPLAY_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_SDISPLAY_ICO}">
    <block type="QH_display_samll_refresh_display"></block>
    <block name="横坚屏设置" type="QH_display_samll_HV"></block> 
    <block name="屏亮度" type="QH_display_samll_BL">
        <value name="QDP_display_samll_bl_1">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    <block name="颜色刷屏/背景色" type="QH_display_samll_clr">
        <value name="QDP_display_samll_clr_1">
            <shadow type="math_number">
                <field name="NUM">8</field>
            </shadow>
        </value>
    </block> 
    <block name="图片显示" type="QH_display_samll_flash_pic"></block>
    <block name="图片显示" type="QH_display_samll_pic">
        <value name="QDP_display_samll_pic_add">
            <shadow type="math_number">
                <field name="NUM">2097152</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_W">
            <shadow type="math_number">
                <field name="NUM">128</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pic_H">
            <shadow type="math_number">
                <field name="NUM">160</field>
            </shadow>
        </value>
    </block>
    <block name="画点指令" type="QH_display_samll_PS">
        <value name="QDP_display_samll_ps_X">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_ps_Y">
            <shadow type="math_number">
                <field name="NUM">80</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_ps_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block name="画线框指令" type="QH_display_samll_PL">
        <value name="QDP_display_samll_pl_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_X2">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_Y2">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_pl_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block name="画圆指令" type="QH_display_samll_CIR">
        <value name="QDP_display_samll_cir_X">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_cir_Y">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_cir_R">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_cir_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block name="显示文本" type="QH_display_samll_DC">
        <value name="QDP_display_samll_dc_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_text">
            <shadow type="text">
                <field name="TEXT">English/变量</field>
            </shadow>
        </value>
    </block>
    <block name="显示中文" type="QH_display_samll_CN">
        <value name="QDP_display_samll_dc_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_dc_text">
            <shadow type="text">
                <field name="TEXT">中文</field>
            </shadow>
        </value>
    </block>
    <block name="显示带底色文本" type="QH_display_samll_SBCDC">
        <value name="QDP_display_samll_sbcdc_colou2">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_colou">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_X">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_Y">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="QDP_display_samll_sbcdc_text">
            <shadow type="text">
                <field name="TEXT">English/变量</field>
            </shadow>
        </value>
    </block>
    <block type="QH_display_samll_order">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">command</field>
            </shadow>
        </value>
    </block>
    <block name="波特率" type="QH_display_samll_btl"></block>
</category>
<category name="%{BKY_QH_LCD_CATEGORY}" id="QH_LCD_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_LCD_ICO}">
    <block type="group_lcd_init2">
        <value name="device">
            <shadow type="math_number">
                <field name="NUM">0x27</field>
            </shadow>
        </value>
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
    </block>
    <block type="group_lcd_print">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">Line1</field>
            </shadow>
        </value>
        <value name="TEXT2">
            <shadow type="text">
                <field name="TEXT">Line2</field>
            </shadow>
        </value>
    </block>
    <block type="group_lcd_print2">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
        <value name="row">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="column">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">hello</field>
            </shadow>
        </value>
    </block>
    <block type="group_lcd_power">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">mylcd</field>
            </shadow>
        </value>
    </block>  
</category>
<category name="%{BKY_QH_HDISPLAY_CATEGORY}" id="QH_HDISPLAY_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_ZKP_ICO}">
    <block type="qdp_display_START"></block>
    <block type="qdp_display_button">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">U</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_display_variable"></block>
    <block type="qdp_display_print">
        <value name="N1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_sleep"></block>
    <block type="qdp_zkpdisplay_buzzer">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">50</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_color"></block>
    <block type="qdp_zkpdisplay_clscolor">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">1024</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_pic"></block>
    <block type="qdp_zkpdisplay_page"></block>
    <block type="qdp_zkpdisplay_drawinground">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value>
        <value name="num4">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_function1">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
        <value name="num4">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
        <value name="num5">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_TEXT">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">150</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num4">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value>
        <value name="num5">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
        <value name="num6">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="text3">
            <shadow type="text">
                <field name="TEXT">English/变量</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_TEXT_CN">
        <value name="num1">
            <shadow type="math_number">
                <field name="NUM">150</field>
            </shadow>
        </value>
        <value name="num2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num3">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="num4">
            <shadow type="math_number">
                <field name="NUM">30</field>
            </shadow>
        </value>
        <value name="num5">
            <shadow type="math_number">
                <field name="NUM">1300</field>
            </shadow>
        </value>
        <value name="num6">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="text3">
            <shadow type="text">
                <field name="TEXT">中文</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_zkpdisplay_order">
        <value name="text">
            <shadow type="text">
                <field name="TEXT">command</field>
            </shadow>
        </value>
    </block>
</category>
<category name="%{BKY_QH_OTHER_CATEGORY}" id="QH_OTHER_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF" iconURI="${QH_OTHER_ICO}">
    <label text="%{BKY_QH_ANNOTATION_LABEL}"></label>
    <block type="qdp_annotation1">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">info</field>
            </shadow>
        </value>
    </block>
    <block type="qdp_annotation2">
        <value name="data">
            <shadow type="text">
                <field name="TEXT">info</field>
            </shadow>
        </value>
        <statement name="input"></statement>
    </block>
    <label text="%{BKY_QH_VARIABLE_LABEL}"></label>
    <block type="QH_variables_declare">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_variables_get">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
    </block>
    <block type="QH_variables_set">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_variables_change">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_SCOOP_LABEL}"></label>
    <block type="cooperativeScheduler_start" id="cooperativeScheduler_start">
    </block>
    <block type="cooperativeScheduler_setup" id="cooperativeScheduler_setup">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="cooperativeScheduler_sleep" id="cooperativeScheduler_sleep">
        <value name="time">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <label text="%{BKY_QH_OPERATOR_LABEL}"></label>
    <block type="QH_arithmetic_operator" id="QH_arithmetic_operator">
        <value name="NUM1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="NUM2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_relational_operator" id="QH_relational_operator">
        <value name="NUM1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="NUM2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_bit_operator" id="QH_bit_operator">
        <value name="NUM1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="NUM2">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="QH_constrain" id="QH_constrain">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="MIN">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="MAX">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="QH_map" id="QH_map">
        <value name="VAR">
            <shadow type="text">
                <field name="TEXT">item</field>
            </shadow>
        </value>
        <value name="MIN1">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="MAX1">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
        <value name="MIN2">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
        <value name="MAX2">
            <shadow type="math_number">
                <field name="NUM">200</field>
            </shadow>
        </value>
    </block>
</category>
`;
}

exports = addToolbox;

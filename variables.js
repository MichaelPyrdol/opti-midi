let unitsPerRow = .3; // .3
let rowsPerBeat = 16; // 16 Integer only
let beatsPerMeasure = 4; // 4 Time Signature
let measureCount = 4; // 4
let tempo = 120; // 120

let numRows = rowsPerBeat * measureCount * beatsPerMeasure;
let delay = 60000 / tempo / rowsPerBeat;

let titleScreen = true;

// Editor

let selectedColumn = 1;
let hoverColumn = 1;

// Playback

var keyAudio = {};

let hoverRows = [];

let selectRows = [];
let notes = [];

let markerRows = [];

let noteSnapshot = [];
let markerSnapshot = [];

let activeKeys = [];

let dragging = false;
let drawing = false;

let drawMode = false;
let eraseMode = false;
let repeating = false;

let selectedNoteDuration = 0;

let contextMenuShow = false;

let defaultOffset = rowsPerBeat;
let defaultNoteDuration = rowsPerBeat;

// Debug
let smooth = false;
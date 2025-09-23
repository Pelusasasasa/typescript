(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 10] = "min";
        AudioLevel[AudioLevel["medium"] = 11] = "medium";
        AudioLevel[AudioLevel["max"] = 9] = "max";
        AudioLevel[AudioLevel["d"] = 10] = "d";
    })(AudioLevel || (AudioLevel = {}));
    ;
    let currentAudio = AudioLevel.d;
    console.log(AudioLevel);
})();
export {};
//# sourceMappingURL=enums.js.map
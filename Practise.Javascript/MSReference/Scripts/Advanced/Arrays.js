ShowHeader(0);

var entryNum = 5;

sample = new Array();

sample[1] = "Maple Street";
sample[entryNum] = "25";

console.log(sample);
ShowOutput(sample[1]);
ShowOutput(sample[entryNum]);

//property array

ShowOutput("//property array");
sample["a"] = "test1";
sample["b"] = "test3";
sample["c"] = "test4";

for (var s in sample) {
    ShowOutput(s + " : " + sample[s]);
}
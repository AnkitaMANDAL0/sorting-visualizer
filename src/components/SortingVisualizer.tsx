import React, { useState, useEffect } from "react";

const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [originalArray, setOriginalArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    if (sorting) return;
    const newArray = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 100) + 1
    );
    setArray([...newArray]);
    setOriginalArray([...newArray]); // Save original array
  };

  const resetArray = () => {
    if (sorting) return;
    setArray([...originalArray]); // Restore original array
  };

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // Bubble Sort
  const bubbleSort = async () => {
    setSorting(true);
    const arr = [...array];

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await delay(50);
        }
      }
    }

    setSorting(false);
  };

  // Selection Sort
  const selectionSort = async () => {
    setSorting(true);
    const arr = [...array];

    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      setArray([...arr]);
      await delay(50);
    }

    setSorting(false);
  };

  // Insertion Sort
  const insertionSort = async () => {
    setSorting(true);
    const arr = [...array];

    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        setArray([...arr]);
        await delay(50);
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await delay(50);
    }

    setSorting(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Sorting Visualizer</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={generateArray} disabled={sorting} style={{ margin: "5px" }}>
          Generate New Array
        </button>
        <button onClick={resetArray} disabled={sorting} style={{ margin: "5px" }}>
          Reset Array
        </button>
        <button onClick={bubbleSort} disabled={sorting} style={{ margin: "5px" }}>
          Bubble Sort
        </button>
        <button onClick={selectionSort} disabled={sorting} style={{ margin: "5px" }}>
          Selection Sort
        </button>
        <button onClick={insertionSort} disabled={sorting} style={{ margin: "5px" }}>
          Insertion Sort
        </button>
      </div>

      {/* Visualizer */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", height: "300px" }}>
        {array.map((value, idx) => (
          <div key={idx} style={{ 
            height: `${value * 3}px`, 
            width: "20px", 
            margin: "0 3px", 
            backgroundColor: "#3498db", 
            transition: "height 0.1s ease-in-out" 
          }} />
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;

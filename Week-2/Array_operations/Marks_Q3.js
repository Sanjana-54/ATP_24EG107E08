/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92 */

    //Marks
    const marks = [78, 92, 35, 88, 40, 67];

    //  1. filter() marks ≥ 40 (pass marks)
    const result=marks.filter((ele)=>ele>=40)
    console.log("Marks greater than 40 are:",result)

    //  2. map() to add 5 grace marks to each student
    const grace_marks=marks.map(ele=>ele+5)
    console.log("After adding grace marks:",grace_marks)

    // 3. reduce() to find highest marks
    const highest=marks.reduce((acc,ele)=>acc>ele?acc:ele)
    console.log("Highest Mark:",highest)

    //  4. find() first mark below 40
    let r=marks.find(ele=>ele<40)
    console.log("First mark less than 40:",r)

    //  5. findIndex() of mark 92 */
    let idx=marks.findIndex(ele=>ele===92)
    console.log("Index of 92 is:",idx)
function deleteData() {
    let result = confirm('ต้องการลบข้อมูลหรือไม่ ?')
    console.log(result);
    if (result) {
        console.log('ลบข้อมูลเรียบร้อย');
    } else {
        console.log('ยกเลิกลบข้อมูล');
    }
}
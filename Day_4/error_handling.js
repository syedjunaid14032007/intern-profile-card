function divide(a,b){
    if (b==0){
        throw new Error("Cannot divide by zero");
    }
    return a/b;
}
try{
    const result = divide(10,0);
    console.log(result);
}catch (error){
    console.log("Something went wrong",error.message);
}finally{
    console.log("This always runs wheteher error or not");
}

async function loadProfile(){
    try{
        const response = await fetch("https://api.example.com/profile");
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log("Could not load profile.",error.message);
    }


}

const randoms = ["Just one small positive thought in the morning can change your whole day —(Albert Einstein)",
    "Learn as if you will live forever, live like you will die tomorrow  —(Mahatma Gandhi)",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too  —(Mark Twain)",
    "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out  —(Eleanor Roosevelt)",
    "When you change your thoughts, remember to also change your world —(Norman Vincent Peale)",
    "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest  —(Walter Anderson)",
    "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together —(Diane McLaren)",
    "Success is not final; failure is not fatal: It is the courage to continue that counts —(Winston Churchill)",
    "It is better to fail in originality than to succeed in imitation —(Herman Melville)",
    "The road to success and the road to failure are almost exactly the same —(Colin R. Davis)"];

function quote() {
    const rndm = Math.floor(Math.random() * randoms.length);
    const output=document.getElementById('out')
    output.innerHTML = randoms[rndm];

}







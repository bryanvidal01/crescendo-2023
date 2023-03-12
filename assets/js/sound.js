window.addEventListener('load',
    async ()=>{
        const audioctx = new AudioContext();

        let src = null;
        const musicbuff = await LoadSample(audioctx,"https://crescendo.code/wp-content/themes/crescendo/assets/audio/sound.mp3");
        const filter = new BiquadFilterNode(audioctx,{frequency:5000, q:5});
        const analyser = new AnalyserNode(audioctx, { smoothingTimeConstant: 0.7, fftSize: 1024 });

        filter.connect(analyser).connect(audioctx.destination);

        document.getElementById("playmusic").addEventListener("click", ()=>{
            if(audioctx.state=="suspended")
                audioctx.resume();
            if(src)
                src.stop();

            src = new AudioBufferSourceNode(audioctx, {buffer: musicbuff, loop:true});
            src.connect(filter);
            src.start();
            Setup(0);

            var i = 0;
            setInterval(function(){
                console.log(i);
                if(i < 2500){
                    Setup(i);
                    i = i+50;
                    i++;
                }
            }, 50);

        });

        /*document.getElementById("stop").addEventListener("click", ()=>{
        if(src){
        src.stop();
        src = null;
        }
        });*/


        function Setup(val) {
            console.log('change');
            filter.type = 'lowpass';
            filter.frequency.value = val;
        }

        $('#change').click(function(){
            var i = 100;
            setInterval(function(){
                console.log(i);
                if(i < 2500){
                    Setup(i);
                    i = i+10;
                    i++;
                }
            }, 1);
        });
        $('#changeDown').click(function(){
            var i = 2500;
            setInterval(function(){
                console.log(i);
                if(i > 200){
                    Setup(i);
                    i = i-10;
                    i--;
                }
            }, 1);
        });

        function LoadSample(actx, url) {
            return new Promise((resolv)=>{
                fetch(url).then((response)=>{
                    return response.arrayBuffer();
                }).then((arraybuf)=>{
                    return actx.decodeAudioData(arraybuf);
                }).then((buf)=>{
                    resolv(buf);
                })
            });
        }
    });

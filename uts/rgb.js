let rgb = 8;
        let r = 0;
        let g = 0;
        let b = 0;
        let w = [];
        
        const newColor = (a) =>{
            r = a[0];
            g = a[1];
            b = a[2];
            if      ((r<256) && (g === 0) && (b === 0)) r+=rgb;
            else if ((r === 256) && (g<256) && (b === 0)) g+=rgb;
            else if ((r > 0) && (g === 256) && (b === 0)) r-=rgb;
            else if ((r === 0) && (g === 256) && (b < 256)) b+=rgb;
            else if ((r === 0) && (g > 0) && (b === 256)) g-=rgb;
            else if ((r<256) && (g === 0) && (b === 256)) r+=rgb;
            else if ((r === 256) && (g === 0) && (b > 0)) b-=rgb;
            // return `rgb(${r} , ${g}, ${b})`;

            a[0] = r;
            a[1] = g;
            a[2] = b;
            // console.log(w);
            return a

        }
        let stalagtite_color = [256 , 256, 0];
        let body_color  = [192,256,0];
        let stalagmite_color = [128 , 256, 0];
        
          setInterval(function() {
            stalagtite_color = newColor(stalagtite_color);
            document.getElementById('stalagtite').style.fill = `rgb(${stalagtite_color[0]}, ${stalagtite_color[1]}, ${stalagtite_color[2]}`
            
            body_color = newColor(body_color);
            document.body.style.backgroundColor = `rgb(${body_color[0]}, ${body_color[1]}, ${body_color[2]}`
            
            stalagmite_color = newColor(stalagmite_color);
            document.getElementById('stalagmite').style.fill = `rgb(${stalagmite_color[0]}, ${stalagmite_color[1]}, ${stalagmite_color[2]}`
        }, 40);
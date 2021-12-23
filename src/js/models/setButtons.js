const btnCopy = `<img id="btnCopy" title="Copia os participantes do grupo para a área de transferência" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABPlBMVEUAAAAnmIkklogmlocimYgllogmlYgllYkllokmlogll4gnk4sklYkllogllogpmYUllogmmIYllogmlogllogkkoAllYgjlYkjlocnlosmlogklogklocll4gllogmlogllogll4gklockl4gllogllYknl4YllogllogllogklYgmlYgkkokkl4kmlocml4Qgj48mlogllogllokllognl4cllogklogllokml4clloghm4UllYkkkoYklocllIgllogllYgjl4sllogllocllogmmYYllogkmIYllogllogolIYllogrlY4llogklYclmIkllocllYgmlokllocklokmlYcklIgmlogmlYgmlocllogllognk4kAgIAllockl4gui4sllogllogmlogll4oml4gllogllogAAAAZSkVZAAAAaHRSTlMANNlkD7upKdO+4yFquNsZrUrf7sMOmEEzLud+VcHczPDNd0fsUjue1eXLhxxbIhsQnPZh/kKlXJlR8hd7FeA++XQs+tHUKLQ588cmyiT8k0Wx17d1xIArejxmWvQaArNpC6z7ckyw3kT/zKcAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AgNARUt8LOwfgAAAO1JREFUKM9jYGBkyoACZhYGZMCaAZdgY0eW4EBIcHJxY5Xg4c3g48cmISAoJCwiikUiQ0xcQkISmwQISFEmIS0DArKYEnLyIKCQkaGopIzNchVVNXUNTS1tHbiErh4I6BsYQhQYGaPoMDE1g+s1h0oIgaywsEQ4zcoaImEDcpQtJ1TUzt4hwxHJKCfnDBdhIO3qBowIdyQJPWAoenhmeHn7ADk+QAl5qISvX0aGf0AgexCIEwyUCIFKyIQCibBwLjAnAuSsyCgw8IgGOxosHhOLHMdx8XDnJqCkCobEJIhwcgoDOkhNk3JIt3ADMQHjyH6B24+svQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wOC0xM1QwMToyMTo0NSswMDowMBcZLuEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDgtMTNUMDE6MjE6NDUrMDA6MDBmRJZdAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==">`;
const btnDown = `<img id="btnDown" title="Baixa os participantes do grupo em .csv" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABSlBMVEUAAAAnmIkklogmlocimYgllogmlYgllYkllokmlogll4gnk4sklYkllogllogpmYUllogmmIYllogmlogllogkkoAllYgjlYkjlocnlosmlogklogklocll4gllogmlogllogll4gklockl4gllogllYknl4YllogllogllogklYgmlYgkkokkl4kmlocml4Qgj48mlogllogllokllognl4cllogllogllogklogllokml4cmlYclloghm4UllYkkkoYllogllYgjl4sllogllogllokmlokllogrlY4llogklYcll4gllogklogmlokllocklokllogmlooll4gllYcllogmlokmlYgmlockmIYllogllogA//8llognk4kAgIAllocllogllogkl4gui4sllogmlogll4oml4gllogmmYYllogAAADCz5b+AAAAbHRSTlMANNlkD7upKdO+4yFquNsZrUrf7sMOmEEzLud+VcHczPDNd0fsUjue1eXLhxxbIhsQnPZh/kKl/KxcmVE18hd7Fb90LPq0l4jKJPlGkEuNt3XE9T2JYHx5PGY5Wu0B9BoCs+b9aQv7ckyw3ijXHdg6AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QIDQEPL66QK4kAAAD3SURBVCjPY2BgZMqBAmYWBmTAmgOXYGNHluBASHBycWOV4OHN4ePHJiEgKCQsIopFIkdMXEJCEpsECEhRJiEtAwKymBJy8iCgkJOjqKSMzXIVVTV1DU0tbR24hK4eCOgbGEIUGBmj6DAxNQOS5hYgtiVUQghkhZU12DgbEGlrB5GwBznKwREhkeOEZJSzC5KEK5KEXk6OphtIwsg9J8cDKCEPlfA0z/Hy9lGxcfH1y8nxB0oEQCVkAnNygoJDGEPDgJxwkLMiIsEgKhooECMZywOk4uKR4zghESiUpJ0MJFNQUgVDqgXE0LR0BnSQkSnllWWVDWICAI0UgJVgUvU0AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA4LTEzVDAxOjE1OjQ3KzAwOjAwEI/5swAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOC0xM1QwMToxNTo0NyswMDowMGHSQQ8AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC">`;
const btnPrt = `<img id="btnPrt" title="Preview para impressão" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABblBMVEUAAAAnmIkklogmlocimYgllogmlYgllYkllokmlogll4gnk4sklYkllogllogpmYUllogmmIYllogmlogllogkkoAllYgjlYkjlocnlosmlogklogklocll4gllogmlogllogll4gklockl4gllogllYknl4YllogllogllogklYgmlYgkkokkl4kmlocml4Qgj48mlogllogmmYYmlYcllogllokllognl4cllogklYkkl4gllogml4cllogklogllokmlokmlocllogllogllYcmmYwllYkkkoYmlokjm4wimoYllYgjl4sllogllogmlYgmlogllogllogjl4UmlYcmlocklooklYkllogllogrlY4llogkl4sllocmlogllogmlokllocklokomo0llogll4cmlogmlYgkmIYllogllogok4gmlognk4kAgIAllocll4gkl4gui4sklokll4oml4gllogllogAAACb4XD3AAAAeHRSTlMANNlkD7upKdO+4yFquNsZrUrf7sMOmEEzLud+VcHczPDNd0fsUjue1eXLhxxbIhsQnOoogPZh/kKlY5r4UbJcmVBE2ouRFHsVqjMmdCz6+WXFtNgsV2Y/VPvKJPxAwnKSt3XEJs5Tejw5WvQtSRoCs59pC3BMsN49qpmoAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QIDQEQG0J+0aIAAAEOSURBVCjPY2BgZKqAAmYWBmTAWgGXYGNHluBASHBycWOV4OGt4OPHJiEgKCQsIopFokJMXEJCEpsECEhRJiEtAwKymBJy8iCgUFGhqKSMzXIVVTV1DU0tbR24hK4eCOgbGFYYyRibVJiaoegwt7CsqLCytrG1q6iwh0oIgaxwcATKOjlXuLhWVCi4QSTcQY7y4ARKeHopeWsCaR8ko3z9gIS/ekAgiBOEJKEHxMEhoWHhEZEVFVFACXmoRHRMRUVsHJARn1BRkQiUSIJKyCRX+KWAGKlpFRXpIGdlhIFBZlZFdg5Igim3IjsPOY7zC7K5WYGgMLeiCCVVMBR7loD1GsYzoIPSMin/cgdjEBMAbpqJtZrTgGcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDgtMTNUMDE6MTY6MjcrMDA6MDA910s3AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTEzVDAxOjE2OjI3KzAwOjAwTIrziwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=">`;
const btnPrtModal = `<img id="btnPrtModal" title="Preview para impressão" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYEAQAAAAa7ikwAAAMfHpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7VpZlgKxDfzXKXIE78txvL6XG+T4Kdlu6GZtYJL8ZJgBpmlkWypJJdnU/vXPTv/Aj4vakLE+uOicwI+JJqqEN0HMnziepTDjef6zfSaP1+nygcIljVc9//Vp3Z9w3V6/cJGTj9cprE9UWILkRfD40Twyv6/7SeK6mtelWYJim29cDH4/1bwElXXjmMr6U2Xdte7l/2l/wXhoqVoMpJVqWmqBZ6XXDDT/SZ3wp/CsNCaF92a89zRfljAo5LC87VWIvYIOSt7e0a32L+9ulK/Suq5vdOmWjvDm4QfS3lzXl2HUfmB9mZE6ftCEjHfLWX+919B7m6tLxkGjbiFK0KYd/g5uzFC5Hl9zeHj8Wbz34xHxCCKJApNXUUTGo8goFazSSRpZZZJdtvFaZMEUjWrK41WpAkPxtaC9iqroaSc8ZFdeR111gLGKaqQ1LqvLXOQYN47xClBfRZW4VUkIY7M/fdCrDz95UO+FVSRFuOgK81KMa0yDLcfPuAsGkX3ZzQ4Fb49lfrHDD6AKC9qh5oAFJpGniGzlFVt62FnjPovX6UKSfF0CoCKMbTEZqWEB4aS20knhlfJSQo8BBkqYudJGZVhAWqsqJqmM1k6RV0Hx2PiOl+NeZZVTfBmxCYaw2mkP20SdYCxjLPDjTQCGktXWWGud9TaQjTY57YyzzjnvOMglr73x1jvvffDRp6CDCTa44EMIMaSookYMtNFFH0OMMSVFCQMlyEq4P+FKVllnk2122eeQY04F8Cmm2OKKL6HEkqqquiJMVFd9DTXW1CQ1RIpmmm2u+RZabKkDa11302133ffQY08Xqy2r3j0+sJpcVlPDUnyfv1gNV8n7TYTkcGLZZrCYMhIW92wBAFqxzUSQxii2HNtMREQ2bRUmadk2VCVbDCY0TSrb5cV2V8udshvZcMpu6p3liE33F5YjmO7ebg+sVjnPlWGx6YWsU6Hhffi8hUQqJE5qabz2zNe2S030pkoP1Q+d9mAxujVVNZFNTD66Diep0bUosTQYwnhXQk0FqomIc726XLzuTSadi4PrIyJWxE8EYoChAhFQpdANU1W5ufEJQX2ty+B7FVCw7piU1J4/kjV9IIz4o78QRtvUfhVG+3X+IoxulfatMDoorTjcqX2xsXoYLjaVMqDXrcmmaieDUlkBo9ZlG2q1IQtvbJG1NCoaw+uaq8o1giSJ1GPQneeF0XDFpzGfGuAAwKXMClDWHV9nhGFcF3TThapzsrLv5VxNkphE9ha/NtuIsGxSgAeWWOEYQBmG7FXxCnRJPLRmyBblKglfBOTiexAHaSzOxWbxmr2zOUHcDrRhD1rXeAXDLRDY1pt3r3osld2mOOjfecPxsmUtGqJDsgSfx0y6qtBqUdmm4kJJ0mQNl2rNWw1Xl622aGuzvkA12XjfSzRI/MNqBTEQVmuIAWw36FQqH8AUetO5xcpeiuV3WTriEpaiQjWyGQQPY7yM/F8ooC0Y0ntyzlrQxYAIURAuNBAiCuKKHhhJAoMMq/ne3BgfdvENd/SurOj47VlYE4evJWTK1BOiEVTBuAzOy4VKIGgsAFmAcSnTQGVEfGNUcnpWjMs2BJU6nl3KA5dfiaMp73dxtJ/eL+LofrXfiaNnynssbvNq+AS8Gi4xvJo9jOAT2rmgLLv1crEKt5XeTBdDyRDMcLHh1Qe0w7tD1k2kCkEcLYarqW5ybFUNx4WnwVtzgrtZlaSsXmjMTJZmEXe6TYzT/VLpXnUDUJybwiVNnXilSz4bIRJBEG8RTqAUFu9ECvzasc5skTTrM28jaHh5G8RA51NMkktMxJ0QYndC9BA9xGAxLEThWxRqmEbBBO8nBelzUmzPy6RgLW17MEjjyOjaoma0BB6gGlIv9BZSBSWoSMwO3IV1HCNs6bmKgI7BA8xQXYc6+gzAEziYfqeJHE7QY8J6ISfMjAKjwO8H/iAJquyj9uGcklhoDJtQ2kv9RSjtpf4ilJ5N9VOh9HT9DSyKb9qyG+MXuc2M3CbtJbfB1pzbCJ6ikdvcTTLy7pCMwC9vk1EuC9ojPytCepsJerrydLmRoKcnL59Dgh6e7G0RYIvDkyXyM6eN4cvUZWZocaayYA8NaEoNTBTwqtrU4ERIJTb4dapgyeDUSPUSmPQaNabjFAN4dUfmMaQf+9kjSC9E08eQdoZjUBcxj1y7UVQCR2UPOZDUZMDeRbJQgkIUUhHisJYRhfKTaEK37Pis495GE+ozdTMAH0eTFUuGkNtososlNILJPpacD4rzdcKoUF8ZYfK8C0naeN6FJE2et0jSoHkTlwNEglsaE0YwAmDERmAYLZuaGplFAEbLpN45USzTP5hUBcBIDJPClHSc6FZ+gCipgU62LdAJ4pLNAAosC29OoD2ReaGZUE+FmBgOrK/y43TmveF09JTkXcntRm0XsQXDvVDbrgH2Cm1xPGK+ZAZKmDHhC6BLlvUnmXrnwjrkZIpMvWfe8L+2I96ULfL01RPVwRP1+chNvwfZKZR+D7JTKL1OMueF0vnM9VoofZcO74XS1zm266IGTJUEpju1HEbMqXCqjKiOsJGZGklE6YpywMUkESlsRKaxNQcfk0LkjAI+AyzaCVGRCK6hmWT1nDDnOnqfHFaHSxvzqMQZ+QLRduaL6ehY2nBJThjL06dPJr08fXA+pCP29MH5OGCa+2qTPik3b6vNvefSi/LsbFE6PJeG6y6/5fA//XYUOryM9/l/iEFxfFsu3VRLL2rGY8lI39eMl5IRhuYsssaSzWWtHcaylccSpYPGA4xa22ocLGyNVpgfYq/DUDlgqHwdih6T3c/zE+0S1Jc5dqZY+j3HziXQdQ0nao8XpQadrTXelRp0ttZ4V2rQ2VrjXalB98QMyeit0jEUUugaCn4RI+XRWLyQtlrTgbRFe0vaWn8Yl2gLTF/Hpf/3If+3fch31Gq4A97W0aVKwjXuUaEWctw/0nl1FBFPU/R7IItFGzccWxl37cRyaCdmKj9V+1cPpO+jxzHs0eu4twt7Og5GDndmNrnv+AS4GKy2a/gYuyPk+kDI9cWik6OgBBwcRS6GUilN1nO7cTAvyUkotu8zZ5kSuLsjh/E7UMEBg7iRNGe7r0Z4todixCzqOyo45EimvjMYiNEj4nrto2Kouycpgs7liPcpgs7liPcpgs7liPcAJflzCfn/lP2fTdkIgDKNNs/YxEilaEq2pQh6H8GNS3YtexSLLiOiqmBVATPTOVbTPIJmBp3zPu4K0Gv9SXcFKBxdWL9GQ8FQSsVg0Y/BtC7WNSTLUr2VSaUIjphykJlsDRitaYxWL6ONvYE5mhVbtRvHYFe6eyTmJzZYztF22i34J9pOl5W8ou137YIHS/uuXXDfLaB+nP3N3IeYY9HxxAz03A7iT6uj0dc4s29G1wqthl+WR0eYnTDPk5KQnq/6M2zR85rwbUl4p6ON5s4+22zXrv147rOtdu3W6/S7TJmumZLSILnbLtPqQez3mUYPYnG240bT6p0xZ+uFmAHeblp9I46mvN/F0X56v4ij+9V+J46eKe9TcbPHNpsEY8Mtr6wwkoKu6ZATUiu7DoHddQg6gfm+548ncjD9won2OZh+36KbOZh+36KbU6cLJ1qd8m/3W+hmw+Xr/Ra62XAxX7X9Ryn6NUc7woO+52hHeND3HO0ID/qeox3hQSc52oaNp5so9NEuyotNFPpoF2Uz93+VQ7Y+295c3q+2Nwr80fUuc0Of6/v7epKOBeW1ntz66GcF0uMK9XOB9LrkPS+Qnq35U4H0TolnBdLDNfMW2Trmx7FpTytEzgdWEaUdKKZ1zG8H46CPBO59U5wJEP3Grq/kmt6z65tzZk+OmdG7c2a8ofiOovLOJSnToezYiwhVYzLS+GCbia2rjvSAWorDRoqZj61KmYVWUiGCSuTsUpDhm5dB+QDvb27fOptWHJuYow83YXFoxN214bjlQqMTd9OH+0YYjQbOh8IelRZ0ZNksYWvr8eGz2dgTYrb2+PDZs94efdbci/kZsB7uHY1TBjM2jx0T3om+bHCv3jiMfuiNk5T3hxbgux+cGJkHRujbEyO35IueZNePd9vpdrv92912+vaQ4K04+vaQ4K04+u3M4VUc/cURRhZHf3GEcczoL44wsjj6iyOMLI4+OJfxUhydR8prcbQ7dYiQuw5kjGKLDzduBzKqmseI19Y0uNg4VjTPYyTeoSIxmDpvUe297b4cgutH+jeLVQ0gX2pjyAAAASRpQ0NQSUNDIHByb2ZpbGUAAHicnZC/SsNQFMZ/qaIiFRFFQRwyuBZc7OTiHwwOhZpGMDqlSYrFJIYkpfgGvok+TAdB8A18AQVnvxsdHMzihY/z43DO9917oWUnYVrO70GaVYXjHvqX/pW9+EabLdak1SAs897g1KPxfL5imfrSMV7Nc3+ehSguQ9WZlIV5UYF1IO5Oq9ywxMat5x6LH8R2lGaR+Em8G6WRYbPrpskk/PE0t2nH2cXA9KUdHM7o0cdmyIQxCRUd1UydE7rsqzoUBNxTEqomxOpNNVNxIyrl5HAk8kS6TUPedp3XV8pQHmN5mYQ7UnmaPMz/fq99nNeb1uYsD4qgbs1JrdEI3h9hxYf1Z1i+bsha+v22hpluPfPPN34B9qtQbLlZ+PwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+UMFxEbHsy+nQgAAAKHSURBVEjHrZRbSJVBFIW/bUWKGWZoURFFF4hCCcxjBCVSVBBldhFKesiSSMOIIrKHqES6gFAPdlUzT2EF9ZJSRiE+dL9gEggRphEiCh6M8tjlXz1oV/yPv+J6mZk9e2bttffsMf6ClFIAhUAgjgExrwnyR5j5C/AKqbpICn/ozbeiUiqLkDIrQvmN/HcZLDcL7pFykiAlAE6s+1FfJJp+GiuNk9hn5j/pIaqbCb3juXFS+I6BFADICRstlaVLmWUeFPzGTEj0S93L+99ung+qAbAwp0dOVhVWskbiuJl/vweCojpYmgwk97/ffQler5UONELN0l5b8X04NVoi0cz//Jen/Z8is/R6749iQy1MuvOvddVYs2X5IRVIu1Mgfi9oE4w/DnnpMOYu7Mn9z3X1n2l5jFnde2lJgocUzamHnbfNgl1S9gaYUAltM+DpOHc97dGDKXI/6PgOL7tCEFwHfB4JPl2EkonSj1UwqwqyWsw+58KzUBH4PCsw27uOYYJLkVNrIaO4r7tj4VAaTO2BnMvuV5WWmT2J9JiijHVQmg0982H9Zpg9Hd62wpML7gQtk3vHe1uBvIGK7EB9p1lwo5TUAVTClGuQtMudoCEKWgPw/IuXv2iRlHNbyr4h+dOkBY+9N99NL31w5AikFvXOb52BF3eGtcjwdSW8PdwX00Iz56MU1Qxzr7pf9c4xaz/okeBoEzS8gG/dsDhRcgqhLRXiC90JAivAM4HNg5IMs+BZiQ6wSog6BL7t7gSNMdA4iK9CUbPkjDoDEdOAY2ZvtkBWqHR3DaIGVduwgkd9TBvhyodhaWupulgKfzX08+H1UvWFEApO1MKDTilwfmgU0TWQ3/G35SdGZAZRTy486gAAAABJRU5ErkJggg==">`;


import { saveCsv, preview, contactsToClipboard } from './handle.js';


const setButtons = setInterval( () => {
    
    if(!document.getElementById('btnDown')){
        const btnMais = document.querySelectorAll('._2nY6U._3A-iD');
        const content =  btnMais.length > 0 ? btnMais[btnMais.length - 1] : null;
        
        if(content){
            const [, containerBtn] = content.childNodes;
            const [containerMais] = containerBtn.childNodes;
            const [txtMais] = containerMais.childNodes;
            const text = String(txtMais.textContent || '');
            
                       
            if(text.match(/mais/g)){
                containerBtn.click();

                let i = 0;
                let scrollDow = setInterval(()=>{
                    // classe do container dos contatos para rolar 
                    let box = document.querySelector('.KPJpj');
                    
                    i++;
                    const height = i * 7500
                    if( box && box.scrollTo ) box.scrollTo({top: height, behavior: 'smooth'});
                
                        if (!box || i === 3){

                           // containerDadosGrupo.appendChild(divBtnPrint)     
                            clearInterval(scrollDow);
                        } 
                
                }, 1500);
            }
        }
      
        // classe do container Dados do grupo
        const containerDadosGrupo = document.querySelector('._1FrBz');
       
        if(containerDadosGrupo){   
            
            if( containerDadosGrupo.innerHTML && containerDadosGrupo.innerHTML === 'Dados do contato') return;
            

            const container = document.querySelector("._1FrBz")
            container.setAttribute("style", "display: flex; gap: 8px;");

            //clearInterval(getElement)

            const btnCSV = document.createElement("div")            
            btnCSV.addEventListener("click", saveCsv );
            btnCSV.innerHTML = `${btnDown}`;        
            containerDadosGrupo.appendChild(btnCSV)     

            const divBtnPrint = document.createElement("div")            
            divBtnPrint.addEventListener("click", preview);
            divBtnPrint.innerHTML = `${btnPrt}`;
            
            let i = 0;
            let scrollDow = setInterval(()=>{
                i++;
                let box = document.querySelector('.KPJpj');
                const height = i * 7500
                if( box && box.scrollTo ) box.scrollTo({top: height, behavior: 'smooth'});
               
                if (!box || i === 3){

                    containerDadosGrupo.appendChild(divBtnPrint)     
                    clearInterval(scrollDow);
                } 
               
            }, 1500);

        } 
    }
    
    // classe do container que guarda os nome do grupo e os participantes
    const wrapper_participantes = document.querySelector('._3e6xi');
    

    if( wrapper_participantes &&  !document.getElementById('btnCopy')){
  
        const text = wrapper_participantes.innerHTML;
        if(text === 'online' || text === 'clique aqui para dados do contato')
            return;
    
        if(wrapper_participantes){
            // clearInterval(getElement)
            const button = document.createElement("div")            
            button.addEventListener("click",  contactsToClipboard )
            button.innerHTML = `${btnCopy}`;        
            wrapper_participantes.appendChild(button);       

            // const div = wrapper_participantes.firstChild;            
            // div.appendChild(button);           
        
        }         
    }

    const header = document.querySelector('header.-bGGW');
    if(header && !document.getElementById('btnPrtModal')){
        const button = document.createElement("div")
        button.addEventListener("click", preview);
        button.setAttribute('style',"margin-left: -25px; cursor: pointer") 
        button.innerHTML = `${btnPrtModal}`;        
        header.appendChild(button);  
    }
    
    
}, 2000);

export default setButtons;


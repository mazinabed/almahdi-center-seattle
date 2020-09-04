var hijriDate = document.getElementById("#date");
        function HijriDate() {
           
            var odate = new Date();
           return (String(odate.getDate()) + " " + (NameFromMonth(parseInt(String(odate.getMonth() + 1)))) + ", " + String(odate.getFullYear()) + " (" + GregToIsl(odate.getMonth()+1, odate.getDate()-1, odate.getFullYear()));
          
        }
        document.getElementById('date').innerHTML = HijriDate();

        function intPart(floatNum) {
            if (floatNum < -0.0000001) {
                return Math.ceil(floatNum - 0.0000001)
            }
            return Math.floor(floatNum + 0.0000001)
        }

        function GregToIsl(m, d, y) {

            if ((y > 1582) || ((y == 1582) && (m > 10)) || ((y == 1582) && (m == 10) && (d > 14))) {
                jd = intPart((1461 * (y + 4800 + intPart((m - 14) / 12))) / 4) + intPart((367 * (m - 2 - 12 * (intPart((m - 14) / 12)))) / 12) -
			    intPart((3 * (intPart((y + 4900 + intPart((m - 14) / 12)) / 100))) / 4) + d - 32075
            }
            else {
                jd = 367 * y - intPart((7 * (y + 5001 + intPart((m - 9) / 7))) / 4) + intPart((275 * m) / 9) + d + 1729777
            }
            l = jd - 1948440 + 10632
            n = intPart((l - 1) / 10631)
            l = l - 10631 * n + 354
            v = (intPart((10985 - l) / 5316)) * (intPart((50 * l) / 17719)) + (intPart(l / 5670)) * (intPart((43 * l) / 15238))
            l = l - (intPart((30 - v) / 15)) * (intPart((17719 * v) / 50)) - (intPart(v / 16)) * (intPart((15238 * v) / 43)) + 29
            m = intPart((24 * l) / 709)
            d = l - intPart((709 * m) / 24)
            y = 30 * n + v - 30

            return (String(d+1) + " " + NameFromMonthH(parseInt(m)) + ", " + y + " A.H.)")
            //return(String(30) + " " + NameFromMonthH(parseInt(m)) + ", " +  y + " A.H.)&nbsp")

        }


        function NameFromMonthH(iMonth) {
            if (iMonth == 1) { return "محرم" }
            if (iMonth == 2) { return "Safar" }
            if (iMonth == 3) { return "Rabil'al Awwal" }
            if (iMonth == 4) { return "Rabil'al Athani" }
            if (iMonth == 5) { return "Jamaada'al Ula" }
            if (iMonth == 6) { return "Jamaada'al Athani" }
            if (iMonth == 7) { return "Rajab" }
            if (iMonth == 8) { return "Sha'ban" }
            if (iMonth == 9) { return "Ramadhan" }
            if (iMonth == 10) { return "Shawaal" }
            if (iMonth == 11) { return "Dhu l Qa'dah" }
            if (iMonth == 12) { return "Dhu al Hajjah" }

        }


        function NameFromMonth(iMonth) {

            if (iMonth == 1) { return "January" }
            if (iMonth == 2) { return "February" }
            if (iMonth == 3) { return "March" }
            if (iMonth == 4) { return "April" }
            if (iMonth == 5) { return "May" }
            if (iMonth == 6) { return "June" }
            if (iMonth == 7) { return "July" }
            if (iMonth == 8) { return "August" }
            if (iMonth == 9) { return "September" }
            if (iMonth == 10) { return "October" }
            if (iMonth == 11) { return "November" }
            if (iMonth == 12) { return "December" }

        }
    console.log(HijriDate());
   
    
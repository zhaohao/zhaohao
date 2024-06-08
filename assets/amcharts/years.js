            var birthdaystr = '1984-12-03';
            var birthday = new Date(birthdaystr.replace(/-/g, "/"));
            
            var today = new Date();
            var days = today.getTime() - birthday.getTime();
            var time = parseInt(days / (1000 * 60 * 60 * 24));
            var homedays = time + 31019 - 40603;
        	
            var chart;

            var chartData = [
                {
                    "Address": "BeforeSchool@LuoChiKeng",
                    "Time": 2098
                },
                {
                    "Address": "PrimarySchool@LuoChiKeng",
                    "Time": 1826
                },
                {
                    "Address": "JuniorMiddleSchool@XiPing",
                    "Time": 366
                },
                {
                    "Address": "SchoolSuspension@LuoChiKeng",
                    "Time": 365
                },
                {
                    "Address": "JuniorMiddleSchool@ShenZhai",
                    "Time": 730
                },
                {
                    "Address": " SeniorMiddleSchool@SuiPing",
                    "Time": 1096
                },
                {
                    "Address": "Restudy@SuiPing",
                    "Time": 365
                },
                {
                    "Address": "SYSU@ZhuHai",
                    "Time": 731
                },
                {
                    "Address": "SYSU@HaiZhu",
                    "Time": 668
                },
                {
                    "Address": "HX@TianHe",
                    "Time": 1339
                },
                {
                    "Address": "Home@PanYu",
                    "Time": homedays
                }
            ];


            AmCharts.ready(function () {
                // PIE CHART
                chart = new AmCharts.AmPieChart();

                // title of the chart
                chart.addTitle("These Years These Days " + "[" + (time+1).toString() + "]", 16);

                chart.dataProvider = chartData;
                chart.titleField = "Address";
                chart.valueField = "Time";
                chart.sequencedAnimation = true;
                chart.startEffect = "elastic";
                chart.innerRadius = "30%";
                chart.startDuration = 2;
                chart.labelRadius = 15;
                chart.balloonText = "[[title]]<br><span style='font-family: Verdana font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
                // the following two lines makes the chart 3D
                chart.depth3D = 10;
                chart.angle = 15;

                // WRITE                                 
                chart.write("chartdiv");
            });
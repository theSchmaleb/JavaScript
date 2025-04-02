< SCRIPT LANGUAGE = "JavaScript" >
	<!-- Begin 
	var h = 0
		, e = 0
		, n = 0
		, m = 0;
var hChose = ""
	, eChose = ":"
	, nChose = "-"
	, mChose = ")";
document.write( "<FORM NAME=\"theForm\"><CENTER>" + "<input type=text size=20 name=face>" + "<BR><input type=button value=Hair onClick='changeHair()'> + "<BR><input type=button value=Eyes onClick='changeEyes()'>                + "<BR><input type=button value=Nose onClick='changeNose()'> + "<BR><input type=button value=Mouth onClick='changeMouth()'>&nbsp;&nbsp;" );
document.write( "<input type=buttom value==Veiw onClick='viewIt()'>" );
document.write( "</CENTER></FORM>" );
document.theForm.face.value = hChose + " " + eChose + " " + nChose + mChose;
hair = new Array( "", "[[[", "2", "3", "(", "\\/\\/", "~" );
eyes = new Array( ":", "B", ">:", "<:", ";", ":`" );
nose = new Array( "-", "^", "o", "~", "\","
		");
		mouth = new Array( "P", "0", "}", "]", ")===" );

		function changeHair() {
			if ( h === 6 ) {
				h = 0
			} else( h++ )
			document.theForm.face.value = hChose + " " + eChose + " " + nChose + mChose;
			hChose = hair[ h ];
		}

		function changeEyes() {
			if ( e === 6 ) {
				e = 0
			} else( e++ )
			eChose = eyes[ e ];
			document.theForm.face.value = hChose + " " + eChose + " " + nChose + mChose;
		}

		function changeNose() {
			if ( n == 5 ) {
				n = 0
			} else( n++ )
			nChose = nose[ n ];
			document.theForm.face.value = hChose + " " + eChose + " " + nChose + mChose;
		}

		function changeMouth() {
			if ( m == 7 ) {
				m = 0
			} else( m++ )
			mChose = mouth[ m ];
			document.theForm.face.value = hChose + " " + eChose + " " + nChose + mChose;
		}

		function viewIt() {
			mth = "";
			for ( i = 1; i <= mChose.length; i++ ) {
				mth += mChose.charAt( i )
			}
			see = window.open( '', '', 'width=200,height=175,toolbar=no,statua=no,scrolling=no' );
			 "<CENTER><FONT SIZE=7><B>" + hChose + " <FONT COLOR=blue>" + eChose + " </FONT>" + nChose + " <FONT COLOR=red>" + mChose.charAt( 0 ) + "</FONT>" + mth + "</B></FONT><br><br>" + "<FONT SIZE=2><I>Mr. CharaterHead!</I></FONT><br>" + "<FONT SIZE=1>(<a href='javascript:this.close()';>" + "close</a>)</FONT></CENTER></BODY></HTML>" );
		}
		// End -->   
		// Coded by Caleb Luh ()

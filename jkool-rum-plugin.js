
function createGuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

function get_browser_info(){
	var nVer = navigator.appVersion;
	var nAgt = navigator.userAgent;
	var browserName  = navigator.appName;
	var fullVersion  = ''+parseFloat(navigator.appVersion); 
	var majorVersion = parseInt(navigator.appVersion,10);
	var nameOffset,verOffset,ix;

	// In Opera, the true version is after "Opera" or after "Version"
	if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
	 browserName = "Opera";
	 fullVersion = nAgt.substring(verOffset+6);
	 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
	   fullVersion = nAgt.substring(verOffset+8);
	}
	// In MSIE, the true version is after "MSIE" in userAgent
	else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
	 browserName = "Microsoft Internet Explorer";
	 fullVersion = nAgt.substring(verOffset+5);
	}
	// In Chrome, the true version is after "Chrome" 
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
	 browserName = "Chrome";
	 fullVersion = nAgt.substring(verOffset+7);
	}
	// In Safari, the true version is after "Safari" or after "Version" 
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
	 browserName = "Safari";
	 fullVersion = nAgt.substring(verOffset+7);
	 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
	   fullVersion = nAgt.substring(verOffset+8);
	}
	// In Firefox, the true version is after "Firefox" 
	else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
	 browserName = "Firefox";
	 fullVersion = nAgt.substring(verOffset+8);
	}
	// In most other browsers, "name/version" is at the end of userAgent 
	else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
	          (verOffset=nAgt.lastIndexOf('/')) ) 
	{
	 browserName = nAgt.substring(nameOffset,verOffset);
	 fullVersion = nAgt.substring(verOffset+1);
	 if (browserName.toLowerCase()==browserName.toUpperCase()) {
	  browserName = navigator.appName;
	 }
	}
	// trim the fullVersion string at semicolon/space if present
	if ((ix=fullVersion.indexOf(";"))!=-1)
	   fullVersion=fullVersion.substring(0,ix);
	if ((ix=fullVersion.indexOf(" "))!=-1)
	   fullVersion=fullVersion.substring(0,ix);

	majorVersion = parseInt(''+fullVersion,10);
	if (isNaN(majorVersion)) {
	 fullVersion  = ''+parseFloat(navigator.appVersion); 
	 majorVersion = parseInt(navigator.appVersion,10);
	}

	return majorVersion;
	}


if (('performance' in window) & ('timing' in window.performance)
		& ('navigation' in window.performance)) {

	// User fills in these variables.
	var token = "775d182c-fb54-4eb1-be58-1153ce2d7865";
	var appl = "jKoolUI";
	var server = "jKoolServer";
	var dataCenter = "NastelHQ";
	
	// System computed variables
	var myJSONData = "";
	var timingProperties = "";
	var path;
	var url = window.location.href;
	var address = url.substring(0, (url.indexOf("?") > 0) ? url.indexOf("?") : url.length);
	var platform = navigator.platform; 
	var userAgent = navigator.userAgent; 
	if (userAgent.indexOf("Chrome/") > 0)
		userAgent = "Chrome";
	else if (userAgent.indexOf("Seamonkey/") > 0)
		userAgent = "Seamonkey";
	else if (userAgent.indexOf("Firefox/") > 0)
		userAgent = "Firefox";
	else if (userAgent.indexOf(";MSIE/" > 0))
		userAgent = "IE";
	else if (userAgent.indexOf("Chromium/") > 0)
		userAgent = "Chromium";
	else if (userAgent.indexOf("Safari/") > 0)
		userAgent = "Safari";
	else if (userAgent.indexOf("Opera/") > 0)
		userAgent = "Opera";
	var browserVersion = get_browser_info();
	var queryString = url.substring((url.indexOf("?") > 0) ? url.indexOf("?") : 0, (url.indexOf("?") > 0) ? url.length : 0); // property on activity
	var d = new Date();
	var now = d.getTime();
	var sid = document.getElementById('corrid').value;
	var rid = document.getElementById('rcorrid').value;
	var timings = window.performance.timing;
	var userName = document.getElementById("username").value;
	var ipAddress = document.getElementById("ipaddress").value;
	var geoAddress = "Melville";
	var activityId = createGuid();

	var activityProperties = '"properties": [{"name": "queryString","type": "string","value":"'
		.concat(queryString).concat('"},{"name": "platform","type": "string","value":"')
		.concat(platform).concat('"},{"name": "browser","type": "string","value": "')
		.concat(userAgent).concat('"},{"name": "browserVersion","type": "string","value": "')
		.concat(browserVersion).concat('"},replaceme]');
	var eventProperties = '","properties": [{"name": "JK_CORR_SID","type": "string","value":"'
		.concat(sid).concat('"},{"name": "JK_CORR_RID","type": "string","value":"')
		.concat(rid).concat('"},{"name": "queryString","type": "string","value":"')
		.concat(queryString).concat('"},{"name": "platform","type": "string","value":"')
		.concat(platform).concat('"},{"name": "browser","type": "string","value": "')
		.concat(userAgent).concat('"},{"name": "browserVersion","type": "string","value": "')
		.concat(browserVersion).concat('"},replaceme]');
	var sourceFqn = "APPL="
		.concat(appl)
		.concat('#SERVER=')
		.concat(server)
		.concat('#NETADDR=')
		.concat(ipAddress)
		.concat('#DATACENTER=')
		.concat(dataCenter)
		.concat('#GEOADDR=')
		.concat(geoAddress);
	
	var common = '"source-fqn":"'
	.concat(sourceFqn)
	.concat('","msg-tag":"')
	.concat(rid)
	.concat('","time-usec":')
	.concat(now)
	.concat('000')
	.concat(',"resource":"')
	.concat(url)
	.concat('","severity":"SUCCESS","parent-id":"')
	.concat(activityId)
	.concat('","location":"')
	.concat(ipAddress)
	.concat('","source-ssn":"')
	.concat(appl)
	.concat('","user":"')
	.concat(userName)
	.concat('","corrid":"')
	.concat(document.getElementById('corrid').value)
	.concat(',')
	.concat(document.getElementById('rcorrid').value)
	.concat(eventProperties)
	.concat('}')

	// Start/End times
	var navigationStart;
	var redirectStart;
	var redirectEnd;
	var fetchStart;
	var domainLookupStart;
	var domainLookupEnd;
	var connectStart;
	var unloadEventEnd;
	var fetchStart;
	var domainLookupStart;
	var domainLookupEnd;
	var connectStart;
	var connectEnd;
	var requestStart;
	var responseStart;
	var responseEnd;
	var domLoading;
	var domInteractive;
	var domContentLoadedEventStart;
	var domContentLoadedEventEnd;
	var domComplete;
	var loadEventStart;
	var loadEventEnd;
	var unloadEventStart;
	var unloadEventEnd;
	

	window.addEventListener('load', function() {

		// Obtain start/end times
		for ( var timing in timings) {
			if (timing == "navigationStart")
				navigationStart = timings[timing]
			else if (timing == "redirectStart")
				redirectStart = timings[timing]
			else if (timing == "redirectEnd")
				redirectEnd = timings[timing]
			else if (timing == "responseStart")
				responseStart = timings[timing]
			else if (timing == "responseEnd")
				responseEnd = timings[timing]
			else if (timing == "connectStart")
				connectStart = timings[timing]
			else if (timing == "connectEnd")
				connectEnd = timings[timing]
			else if (timing == "domainLookupStart")
				domainLookupStart = timings[timing]
			else if (timing == "domainLookupEnd")
				domainLookupEnd = timings[timing]
			else if (timing == "unloadEventEnd")
				unloadEventEnd = timings[timing];
			else if (timing == "fetchStart")
				fetchStart = timings[timing];
			else if (timing == "requestStart")
				requestStart = timings[timing];
			else if (timing == "domLoading")
				domLoading = timings[timing]
			else if (timing == "domInteractive")
				domInteractive = timings[timing]
			else if (timing == "domContentLoadedEventStart")
				domContentLoadedEventStart = timings[timing];
			else if (timing == "domContentLoadedEventEnd")
				domContentLoadedEventEnd = timings[timing];
			else if (timing == "domComplete")
				domComplete = timings[timing];
			else if (timing == "loadEventStart")
				loadEventStart = timings[timing]
			else if (timing == "unloadEventStart")
				unloadEventStart = timings[timing];
			else if (timing == "unloadEventEnd")
				unloadEventEnd = timings[timing];
			else if (timing == "loadEventEnd")
				loadEventEnd = timings[timing];
			else {
				//
			}

		}

		// Redirect
		if (redirectStart > 0) {
			timingProperties='{"name": "timingStart","type": "string","value":"redirectStart"},{"name": "timingEnd","type": "string","value":"redirectEnd"}';
			myJSONData = '{"tracking-id":"'.concat(createGuid()).concat(
					'","start-time-usec":').concat(redirectStart).concat(
					'000,"end-time-usec":').concat(redirectEnd).concat('000')
					.concat(',"operation":"REDIRECT",').concat(common);
			myJSONData = myJSONData.replace("replaceme", timingProperties);
			path = 'event';
			alert(myJSONData);
			$.ajax({
				type : 'POST',
				url : 'http://localhost:6580/JESL/'.concat(path),
				data : myJSONData,
				dataType : 'text',
				headers : {
					'token' : token
				},
			});
		}

		// App Cache
		timingProperties='{"name": "timingStart","type": "string","value":"fetchStart"}';
		myJSONData = '{"tracking-id":"'.concat(createGuid()).concat(
				'","start-time-usec":').concat(fetchStart).concat('000')
				.concat(',"operation":"APPCACHE",').concat(common);
		myJSONData = myJSONData.replace("replaceme", timingProperties);
		path = 'event';
		alert(myJSONData);
		$.ajax({
			type : 'POST',
			url : 'http://localhost:6580/JESL/'.concat(path),
			data : myJSONData,
			dataType : 'text',
			headers : {
				'token' : token
			},
		});

		// DNS Lookup
		timingProperties='{"name": "timingStart","type": "string","value":"domainLookupStart"},{"name": "timingEnd","type": "string","value":"domainLookupEnd"}';
		myJSONData = '{"tracking-id":"'.concat(createGuid())
				.concat('","start-time-usec":')	
				.concat(domainLookupStart)
				.concat('000,"end-time-usec":')
				.concat(domainLookupEnd)
				.concat('000')
				.concat(',"operation":"DNS",')
				.concat(common);
		myJSONData = myJSONData.replace("replaceme", timingProperties);
		path = 'event';
		alert(myJSONData);
		$.ajax({
			type : 'POST',
			url : 'http://localhost:6580/JESL/'.concat(path),
			data : myJSONData,
			dataType : 'text',
			headers : {
				'token' : token
			},
		});

		// TCP
		timingProperties='{"name": "timingStart","type": "string","value":"connectStart"},{"name": "timingEnd","type": "string","value":"connectEnd"}';
		myJSONData = '{"tracking-id":"'.concat(createGuid()).concat(
				'","start-time-usec":').concat(connectStart).concat(
				'000,"end-time-usec":').concat(connectEnd).concat('000')
				.concat(',"operation":"TCP",').concat(common);
		myJSONData = myJSONData.replace("replaceme", timingProperties);
		path = 'event';
		alert(myJSONData);
		$.ajax({
			type : 'POST',
			url : 'http://localhost:6580/JESL/'.concat(path),
			data : myJSONData,
			dataType : 'text',
			headers : {
				'token' : token
			},
		});

		// Request
		timingProperties='{"name": "timingStart","type": "string","value":"requestStart"}';
		myJSONData = '{"tracking-id":"'.concat(createGuid()).concat(
				'","start-time-usec":').concat(requestStart).concat('000')
				.concat(',"operation":"REQUEST",').concat(common);
		myJSONData = myJSONData.replace("replaceme", timingProperties);
		path = 'event';
		alert(myJSONData);
		$.ajax({
			type : 'POST',
			url : 'http://localhost:6580/JESL/'.concat(path),
			data : myJSONData,
			dataType : 'text',
			headers : {
				'token' : token
			},
		});

		// Response
		timingProperties='{"name": "timingStart","type": "string","value":"responseStart"},{"name": "timingEnd","type": "string","value":"responseEnd"}';
		myJSONData = '{"tracking-id":"'.concat(createGuid()).concat(
				'","start-time-usec":').concat(responseStart).concat(
				'000,"end-time-usec":').concat(responseEnd).concat('000')
				.concat(',"operation":"RESPONSE",').concat(common);
		myJSONData = myJSONData.replace("replaceme", timingProperties);
		path = 'event';
		alert(myJSONData);
		$.ajax({
			type : 'POST',
			url : 'http://localhost:6580/JESL/'.concat(path),
			data : myJSONData,
			dataType : 'text',
			headers : {
				'token' : token
			},
		});

		// Processing
		timingProperties='{"name": "timingStart","type": "string","value":"domLoading"},{"name": "timingEnd","type": "string","value":"domComplete"}';
		myJSONData = '{"tracking-id":"'.concat(createGuid()).concat(
				'","start-time-usec":').concat(domLoading).concat(
				'000,"end-time-usec":').concat(domComplete).concat('000')
				.concat(',"operation":"PROCESSING",').concat(common);
		myJSONData = myJSONData.replace("replaceme", timingProperties);
		path = 'event';
		alert(myJSONData);
		$.ajax({
			type : 'POST',
			url : 'http://localhost:6580/JESL/'.concat(path),
			data : myJSONData,
			dataType : 'text',
			headers : {
				'token' : token
			},
		});

		// unLoad
		timingProperties='{"name": "timingStart","type": "string","value":"unloadEventStart"},{"name": "timingEnd","type": "string","value":"unloadEventEnd"}';
		myJSONData = '{"tracking-id":"'.concat(createGuid()).concat(
				'","start-time-usec":').concat(unloadEventStart).concat(
				'000,"end-time-usec":').concat(unloadEventEnd).concat('000')
				.concat(',"operation":"UNLOAD",').concat(common);
		myJSONData = myJSONData.replace("replaceme", timingProperties);
		path = 'event';
		alert(myJSONData);
		$.ajax({
			type : 'POST',
			url : 'http://localhost:6580/JESL/'.concat(path),
			data : myJSONData,
			dataType : 'text',
			headers : {
				'token' : token
			},
		});

		// Navigation Activity
		timingProperties='{"name": "timingStart","type": "string","value":"navigationStart"},{"name": "timingEnd","type": "string","value":"unloadEventEnd"}';
		myJSONData = '{"tracking-id":"'.concat(activityId).concat(
				'","status":"END","start-time-usec":').concat(navigationStart)
				.concat('000,"end-time-usec":').concat(unloadEventEnd).concat(
						'000').concat(',"time-usec":').concat(now).concat('000').concat(',"operation":"NAVIGATION","source-fqn":"').concat(
						sourceFqn).concat('","resource":"').concat(url).concat('",').concat(activityProperties).concat(
						',"user":"').concat(userName).concat('"}');
		myJSONData = myJSONData.replace("replaceme", timingProperties);
		path = 'activity';
		alert(myJSONData);
		$.ajax({
			type : 'POST',
			url : 'http://localhost:6580/JESL/'.concat(path),
			data : myJSONData,
			dataType : 'text',
			headers : {
				'token' : token
			},
		});

	}

	)

	// onLoad & Ajax
	// (To prevent zero from being reported, need to put it in a timeout function)
	setTimeout(
			function() {
				var timings = window.performance.timing;
				timingProperties='{"name": "timingStart","type": "string","value":"loadEventStart"},{"name": "timingEnd","type": "string","value":"loadEventEnd"}';
				var myJSONLoadData = '{"tracking-id":"'.concat(createGuid())
						.concat('","start-time-usec":"').concat(
								timings["loadEventStart"]).concat(
								'000,"end-time-usec":').concat(
								timings["loadEventEnd"]).concat('000').concat(
								',"operation":"ONLOAD",').concat(common);
				myJSONLoadData = myJSONLoadData.replace("replaceme", timingProperties);
				loadPath = 'event';

				alert(myJSONLoadData);
				$.ajax({
					type : 'POST',
					url : 'http://localhost:6580/JESL/'.concat(loadPath),
					data : myJSONLoadData,
					dataType : 'text',
					headers : {
						'token' : token
					},
				});

		var perfEntries = window.performance.getEntriesByType("mark");
		for (var i = 0; i < perfEntries.length; i++) {
			
			var prefix = perfEntries[i].name.substring(0,perfEntries[i].name.indexOf("_"));
			
			if (prefix.length > 0 && prefix == "start")
			{
				var suffix = perfEntries[i].name.substring(perfEntries[i].name.indexOf("_"),perfEntries[i].name.length);
				var start = perfEntries[i];
				var end = window.performance.getEntriesByName('end' + suffix);
				var measure = window.performance.getEntriesByName('measure' + suffix);			
				timingProperties='{"name": "timingStart","type": "string","value":"markStart"},{"name": "timingEnd","type": "string","value":"markEnd"}';
				var myJSONAjaxData = '{"tracking-id":"'.concat(createGuid())
						.concat('","start-time-usec":').concat(Math.round(((timings["navigationStart"] * 1000) + start.startTime)))
						.concat(',"end-time-usec":').concat(Math.round(((timings["navigationStart"] * 1000) + end[0].startTime)))
						.concat(',"elapsed-time-usec":').concat(Math.round(measure[0].duration))
						.concat(',"operation":"' + suffix + '","source-fqn":"').concat(sourceFqn)
						.concat('",').concat(common);
				myJSONAjaxData = myJSONAjaxData.replace("replaceme", timingProperties);
				var ajaxPath = 'event';
				alert(myJSONAjaxData);
				$.ajax({
					type : 'POST',
					url : 'http://localhost:6580/JESL/'.concat(ajaxPath),
					data : myJSONAjaxData,
					dataType : 'text',
					headers : {
						'token' : token
					},
				});
			}
		}

	}, 0);
}

 window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
	
    if (errorMsg.indexOf('Script error.') > -1) {
        return;
    }
    else
    {
		timingProperties='{"name": "timingStart","type": "string","value":"errorTimeStart"}';
		var myJSONErrorData = '{"tracking-id":"'.concat(createGuid()).concat(
		'","start-time-usec":').concat(now).concat(
		'000').concat(',"operation":"JAVASCRIPT_ERROR",').concat(common);
		myJSONErrorData = myJSONErrorData.replace("replaceme", timingProperties);
		errorPath = 'event';
		alert(myJSONData);
		$.ajax({
			type : 'POST',
			url : 'http://localhost:6580/JESL/'.concat(errorPath),
			data : myJSONErrorData,
			dataType : 'text',
			headers : {
				'token' : token
			},
		});
    }
   }

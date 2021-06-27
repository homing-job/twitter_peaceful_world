// profile
const profile_auth_p_selector = '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs > div > span.css-901oao.css-16my406.r-18u37iz.r-1q142lx.r-1tl8opc.r-adyw6z.r-135wba7.r-bcqeeo.r-qvutc0';
const profile_auth_html = '<span class="css-901oao css-16my406 r-18u37iz r-1q142lx r-1tl8opc r-adyw6z r-135wba7 r-bcqeeo r-qvutc0"><div class="css-1dbjc4n r-xoduu5"><div aria-label="認証済みアカウントについての詳細が表示されます。" role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-4qtqp9 r-9cviqr r-1ny4l3l r-o7ynqc r-6416eg"><svg viewBox="0 0 24 24" aria-label="認証済みアカウント" class="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg></div></div></span>';
const profile_auth_svg_selector = '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.css-1dbjc4n.r-6gpygo.r-14gqq1x > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-dnmrzs > div > span.css-901oao.css-16my406.r-18u37iz.r-1q142lx.r-1tl8opc.r-adyw6z.r-135wba7.r-bcqeeo.r-qvutc0 > div > div > svg';
const profile_follow_selector = '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div.css-1dbjc4n.r-1mf7evn > a > span.css-901oao.css-16my406.r-1fmj7o5.r-1tl8opc.r-b88u0q.r-bcqeeo.r-qvutc0 > span';
const profile_follower_selector = '#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div:nth-child(2) > a > span.css-901oao.css-16my406.r-1fmj7o5.r-1tl8opc.r-b88u0q.r-bcqeeo.r-qvutc0 > span';

// timeline
const timeline_auth_p_selector = '.css-901oao.r-1fmj7o5.r-18u37iz.r-1q142lx.r-1tl8opc.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0'
const timeline_auth_svg_html = '<svg viewBox="0 0 24 24" aria-label="認証済みアカウント" class="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg>';

window.addEventListener("load", main, false);
function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 100);
    function jsLoaded() {
    	// timeline
    	document.querySelectorAll(timeline_auth_p_selector).forEach( e => e.innerHTML = timeline_auth_svg_html);
    	// profile	
    	if(document.querySelector(profile_auth_p_selector) != null){
    		if(document.querySelector(profile_auth_svg_selector) == null){
    			// profile_auth_el
				let profile_auth_el = document.querySelector(profile_auth_p_selector);
				profile_auth_el.outerHTML = profile_auth_html;
				// follow_el
				let profile_follow_el = document.querySelector(profile_follow_selector);
				let profile_follow_random_min = 50;
				let profile_follow_random_max = 500;
				profile_follow_el.innerText = Math.ceil(Math.random() * ( profile_follow_random_max - profile_follow_random_min) + profile_follow_random_min);

				//followerer_el
				let profile_follower_el = document.querySelector(profile_follower_selector);
				let profile_follower_random_min = 500000;
				let profile_follower_random_max = 4000000;
				profile_follower_el.innerText = Math.ceil((Math.random() * ( profile_follower_random_max - profile_follower_random_min) + profile_follower_random_min) / 1000) / 10 + '万';
    		}
		}
	}
}
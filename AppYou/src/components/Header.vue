<template>
    <div class="container text-light justify-content-center" id="app_head" style="background: #fafafa;border-bottom: 1px solid var(--bs-gray-500);padding-top: 12px;padding-bottom: 8px;">
<!--             <div class="row">
                <div class="col"><span class="mx-auto d-block" style="color: rgb(0,0,0);float: left;font-weight: bold;float: left;font-family: Nunito, sans-serif;font-size: 22px;"><img src="assets/img/matryoshka-download2.png" style="min-height: 35px;max-height: 35px;">&nbsp; AppYou 🇷🇺<br></span></div>
            </div> -->
			<div class="row">
				<div class="col-6 col-sm-4 d-flex justify-content-between align-bottom"><img src="../assets/img/matryoshka-download2.png" style="min-height: 30px;max-height: 35px;height: 35px;" /><span class="mx-auto d-block align-bottom" style="color: var(--bs-gray-700);float: left;font-weight: 700;float: left;font-family: Nunito, sans-serif;font-size: 22px;padding-top: 3px;">AppYou 🇷🇺<br /></span></div>
				<div class="col-3 col-sm-6"><span></span></div>
				<div class="col-3 col-sm-2 align-items-end text-end">
					<button id="search" class="btn btn-light btn-sm align-self-end" type="button" style="font-size: 18px;font-weight: 700;" v-on:click="$root.startSearch" >
						<svg width="2em" height="1em" viewBox="0 0 24 24">
						    <path d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"></path>
						</svg>
					</button>
				</div>
			</div>
        </div>
</template>
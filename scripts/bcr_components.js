hexo.extend.filter.register('after_post_render', addBCRepositoryInfo);

function addBCRepositoryInfo(data) {
    hexo.log.i('BCR After_post_render: ' + data.title + '(' + data.slug + ')');
    bcr_script = '<script type="application/javascript" src="/js/analytics.js"></script>';
    bcr_footerscript = '<script type="application/javascript" src="https://api.ipify.org?format=jsonp&callback=getIP"></script>' +
    '<script type="application/javascript" src="https://api.freegeoip.app/json/?callback=getGeo&apikey=89ad2120-a542-11ec-921d-5515487b8ac8"></script>' +
    '<script>getAnalytics("' + data.slug + '");</script>';


    https://api.freegeoip.app/json/?callback=test&apikey=89ad2120-a542-11ec-921d-5515487b8ac8


    bcr_header = '<div class="post-meta-container" style="text-align:center"><span class="post-meta-item">';
    bcr_separator = '';
    if (data.inspiration_source && data.inspiration_source_link) {
        bcr_header += '<strong>Source</strong>: <a href="' + data.inspiration_source_link + '">' + data.inspiration_source + '</a>';
        bcr_separator = ' | ';
    }
    if (data.download_info) {
        //Download Info is an array of arrays. Each item is composed by
        //[0=Stable/Beta, 1=Version, 2=Download Link]
        first_download = data.download_info[0];
        bcr_header += bcr_separator + '<strong>Download</strong>: <a href="' + first_download[2] + '">' + first_download[1] + '</a>' + downloadState(first_download[0]);
        bcr_separator = ' | ';
    }
    if (data.object_range) {
        bcr_header += bcr_separator + '<strong>Object Range</strong>: ' + data.object_range;
    }
    bcr_header += '</span></div>';

    bcr_footer = '<hr><div style="text-align:center;border:1px black solid;background-color:#e6fdff;font-size:0.9em"><span class="post-meta-item">';
    bcr_footer_also = '';
    if (data.github_discussion) {
        bcr_footer += '<p style="margin:0px;padding:5px 0px">Got comments about this post? Share them on <a href="' + data.github_discussion + '"><i class="fab fa-github fa-fw"></i> GitHub</a></p>';
        bcr_footer_also = 'also';
    }
    if (data.github_feedback & data.github_feedback===true) {
        bcr_new_issue_title = '[Page Issue] ' + data.source;
        bcr_new_issue_body = '[Enter Feedback Here <== Remove This line]';
        bcr_new_issue_url = encodeURIComponent(bcr_new_issue_title) + '&' +  encodeURIComponent(bcr_new_issue_body);
        bcr_footer += '<p style="margin:0px;padding:5px 0px">Please ' + bcr_footer_also + ' report any issues on this page on <a href="https://github.com/markborges/markborges.github.io/issues/new?title=' + encodeURIComponent(bcr_new_issue_title) + '&body=' +  encodeURIComponent(bcr_new_issue_body) + '"><i class="fab fa-github fa-fw"></i> GitHub</a></p>';
    }
    bcr_footer += '</span></div>';

    data.content = bcr_header + data.content + bcr_footer + bcr_script +bcr_footerscript;
    // hexo.log.i('BC Repository Info Added (' + data.title + ')', data);
    return data;
}

function downloadState(state) {
    switch(state.toLowerCase()) {
        case "stable": return " 🟢 Stable";
        case "beta": return " 🟨 Beta";
        default: return"";
    }
}
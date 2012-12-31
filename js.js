function ht_check($url) {
    politic = 'off';
    porny = 'off';
    other = 'off';
    custom = 'off';
    if (jQuery('#ht_wrap #politic').attr('checked') == 'checked')
        politic = 'on';
    if (jQuery('#ht_wrap #porny').attr('checked') == 'checked')
        porny = 'on';
    if (jQuery('#ht_wrap #other').attr('checked') == 'checked')
        other = 'on';
    if (jQuery('#ht_wrap #custom').attr('checked') == 'checked')
        custom = 'on';
    if (jQuery("#wp-content-wrap").hasClass("tmce-active")) {
        content = tinyMCE.activeEditor.getContent().replace(/\s*/g, '');
    } else {
        content = jQuery('#content').val().replace(/\</g, '&lt;').replace(/\>/g, '&gt;').replace(/\n/g, '<br/>').replace(/\s*/g, '');
    }
	if(content == '')return;
    jQuery('#ht_wrap #btn').prepend('<img src="' + $url + '/wp-admin/images/wpspin_light.gif" id="ht_loading" />');
    jQuery('#ht_wrap #ht_check_btn').attr('disabled', 'disabled');
    jQuery.post($url + '/wp-admin/admin-ajax.php', {
        action: 'ht_check',
        content: content,
        politic: politic,
        porny: porny,
        other: other,
        custom: custom
    }, function(data) {
        jQuery('#ht_loading').remove();
        jQuery('#ht_wrap #ht_check_btn').removeAttr('disabled');
        if (data) {
            jQuery('#ht_content').html(data.replace(/style=\\(".*?)\\/g, 'style=$1"').replace(/\\([\'"])/, '$1')).slideDown();
        } else {
            jQuery('#ht_content').html('Error 发生错误').slideDown();
        }
    }
    )
    return;
}
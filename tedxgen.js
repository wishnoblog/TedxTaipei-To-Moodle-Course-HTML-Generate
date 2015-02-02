//國立高雄應用科技大學 計算機與網路中心
function GenTedX()
{
   var YoutubeContent=$('#YoutubeContent').val();
   var TedxTitle=$('#TedxTitle').val();
   var YoutubeEm=$('#YoutubeEm').val();
   var TedXLink=$('#TedXLink').val();
   var YoutubeEm=$('#YoutubeEm').val();
   var TedXLink=$('#TedXLink').val();
   //alert('go');
   var HTMLCode=
   '<div>'+YoutubeEm+'</div>'+
   '<div>'+
   '<h3>'+TedxTitle +'</h3>'+
   '<p>'+YoutubeContent+'</p>'+
   '</div>'+
   '<h3>相關連結</h3>'+
   '<div>'+'TedX 演講影片：<a href="'+TedXLink+'" target="_blank">'+TedxTitle+'</a>'+'</div>'+
   '<div>'+'影片來源：<a href="http://tedxtaipei.com/" target="_blank">TEDxTaipei </a>';

   $('#result').val(HTMLCode);
   window.prompt("複製到剪貼簿: Ctrl+C, Enter", HTMLCode);

}
function clearAll()
{
  $("input[type='text'], textarea, input[type='password']").each(
  function(){
  $(this).val('');});
  }
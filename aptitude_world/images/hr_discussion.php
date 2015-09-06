<?php
     session_start();
     include_once 'includes/inc_connection.php';//Making database Connection

	include_once 'includes/database.php';//Make connection with the database

 	if(isset($_REQUEST['gid']) && ($_REQUEST['gid'] != "")

	&& isset($_REQUEST['gname']) && ($_REQUEST['gname'] != ""))
 	{
 		$gid       		 =  mysql_real_escape_string($_REQUEST['gid']);

	    $gname         =  mysql_real_escape_string($_REQUEST['gname']);		

	}

 ?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />

<title>Welcome to Indiabix</title>

<link href="css/docstyle.css" rel="stylesheet" type="text/css" />

</head>

<body>

<center>

<div id="ib-page-wrap" style="width: 950px; margin: 10px 10px 20px; border: 4px solid rgb(1, 167, 250);">



<?php include_once("header.php"); ?>

<?php include_once("menu.php"); ?>

<table width="950" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF">

  <tr>

    <td><table width="100%" cellspacing="1" cellpadding="1">

      <tr>

        <td width="80%" valign="top"><table width="97%" cellspacing="1" cellpadding="1">

          <tr>

            <td width="74%" valign="top" class="subheading"><br />

              @ :&nbsp; <a href="index.php" class="subheading">Home</a> &nbsp;&gt;&nbsp; <a href="interviews.php" class="subheading"> Group Discussion </a> &nbsp;&gt;&nbsp;<?php echo $gname;?><br />
              <table width="100%" cellspacing="1" cellpadding="1">
                <tr>
                  <td width="5%">&nbsp;</td>
                  <td width="21%">
				  <img src="images/hr-interview-qa.png"  height="93" width="134" border="0" />				  </td>
                  <td width="74%">
				  
				  	<p><span class="homesubheading">Points to remember before you attend this interview question:
				  	  </span><br />
				  	  <span class="para">=&gt; Assume, now you are sitting in front of the HR manager.
				  	  <br />
				  	  =&gt;Take the initiative to attend this question and tell your real answers.				  </span></p>
				  	</td>
                </tr>
              </table></td>

          </tr>

          <tr>

            <td valign="top"> <table width="90%" align="center" cellpadding="4" cellspacing="4">

                <tr>

                  <td valign="top">&nbsp;</td>

                  <td valign="top">&nbsp;</td>

                </tr>

                 

                  <?php

 $hr_mst = new Database();
  $qry1="select * from hr_mst where hrm_sts = 'a'
 		and  hrm_id = '$gid'";

    

 $hr_mst->query($qry1);

  if($hr_mst->numRows() > 0)

 {

  	foreach($hr_mst->rows() as $cat)

  	{

	 

  ?>			<tr>

                  <td width="4%" valign="top">&nbsp;</td>

                  <td width="96%" valign="top"  class="para">

				 

				 <?php echo (html_entity_decode($cat['hrm_name'])); ?> 			 		  </td>

                  </tr>

                  <?php

 

	}

}

	?>

              

            </table>

			

			

			

			</td>

          </tr>

        </table></td>

        <td width="20%"><?php include_once("right_panel.php");?></td>

      </tr>

    </table>

      <table width="100%" cellspacing="1" cellpadding="1">

        <tr>

          <td align="center" valign="top">&nbsp;</td>

        </tr>

        <tr>

          <td align="center">&nbsp;</td>

        </tr>

        <tr>

          <td align="center">&nbsp;</td>

        </tr>

        <tr>

          <td align="center">&nbsp;</td>

        </tr>

      </table></td>

  </tr>

</table>



<?php include_once("footer.php"); ?>

</div>

</center>



</body>

</html>


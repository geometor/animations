if [ $1 ]
then
  cp -r base $1
  cd $1
  mv base.ggb $1.ggb

  echo "Process Complete"
else
  echo "name is required"
fi

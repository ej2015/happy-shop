AwesomePrint.irb!

AwesomePrint.defaults = {
  indent: 2,
}

if defined?(::Pry)
  begin
    AwesomePrint.pry!
  rescue LoadError
    # The gem could be missing
  end

end

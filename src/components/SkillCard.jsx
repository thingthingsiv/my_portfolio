import PropTypes from 'prop-types';

const SkillCard = ({
  imgSrc,
  label,
  desc,
  classes = '',
}) => {
  return (
    <div
      className={
        'flex items-center gap-4 ring-2 ring-inset ring-zinc-50/10 p-4 rounded-2xl hover:bg-zinc-800 transition-colors group ' +
        classes
      }
    >
      <figure className="bg-zinc-800 rounded-xl overflow-hidden w-16 h-16 p-3 group-hover:bg-zinc-900 transition-colors">
        <img
          src={imgSrc}
          alt={label}
          className="w-full h-full object-contain"
        />
      </figure>

      <div>
        <h3 className="font-medium">{label}</h3>
        <p className="text-zinc-400 text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;

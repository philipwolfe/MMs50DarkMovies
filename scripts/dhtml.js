var $ = function (id) { return document.getElementById(id); };


function getMouseCoords(ev)
{
	if (ev.pageX || ev.pageY)
	{
		return { x: ev.pageX, y: ev.pageY };
	}
	return {
		x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
		y: ev.clientY + document.body.scrollTop - document.body.clientTop
	};
}

function getMouseOffset(target, ev)
{
	var docPos = getPosition(target);
	var mousePos = getMouseCoords(ev);
	return { x: mousePos.x - docPos.x, y: mousePos.y - docPos.y };
}

function getPosition(el)
{
	var clientRect = el.getBoundingClientRect();

	return { x: Math.round(clientRect.left), y: Math.round(clientRect.top) };
}
